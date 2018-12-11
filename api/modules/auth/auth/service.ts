import * as Joi from 'joi';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken'
import userRepository from '../users/repository';
import { ILoginInput, ITokenData } from './interface';
import { IUser, ICreateUserInput } from '../users/interface';
import config from '../../../../configs';

const addFullName = (user: ICreateUserInput) => {
  const normalizedFullName = [user.firstName, user.lastName].join(' ').toLocaleLowerCase();

  const fullName = [user.firstName, user.lastName].join(' ');

  return {
    ...user,
    normalizedFullName,
    fullName,
  };
};

const checkEmailExist = async (email: string): Promise<boolean> => {
  if (!email) {
    throw new Error('Bad Request');
  }

  // check if email exist
  const existedUser = await userRepository.findUserByEmail(email);
  if (existedUser) {
    return true;
  } else {
    return false;
  }
};

const createToken = async (user: IUser): Promise<string> => {
  const tokenData: ITokenData = {
    _id: user._id,
    email: user.email,
    profileImgUrl: user.profileImgUrl,
    fullName: user.fullName,
    dob: user.dob,
    phoneNumber: user.phoneNumber,
    i18n: user.i18n,
    permissions: user.permissions ? user.permissions : [],
    roles: user.roles ? user.roles : [],
  };
  const expiresIn = config.auth.expiresIn;

  return await jwt.sign(tokenData, config.auth.secret, { expiresIn });
}

const refreshToken = async(token: string): Promise<string> => {
  let oldTokenData: ITokenData = {} as any;
  try {
    oldTokenData = jwt.verify(token, config.auth.secret) as any;
  } catch (error) {
    throw new Error('Invalid token');
  }

  if (oldTokenData && oldTokenData.exp && oldTokenData.exp < Math.round(new Date().getTime() / 1000)) {
    throw new Error('Token expired');
  }

  const user = await userRepository.findUserForLogin(oldTokenData.email);
  return await createToken(user);
};

const loginLocal = async (body: ILoginInput): Promise<String> => {
  // Validate Body
  const validationRule = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
  const { error } = Joi.validate(body, validationRule, {
    allowUnknown: true,
  });
  if (error) {
    throw new Error(error.details[0].message);
  }

  // Check Email and Password
  const existedUser = await userRepository.findUserForLogin(body.email);
  if (!existedUser) {
    throw new Error('Email Doesnt Exist');
  }
  if (!existedUser.emailConfirmed) {
    throw new Error('Email Doesnt Exist');
  }
  if (!existedUser.isActive) {
    throw new Error('This Email Is Currently Deactivate. Please Contact Your Admin');
  }
  if (!bcrypt.compareSync(body.password, existedUser.password)) {
    throw new Error('Password Not Correct');
  }

  return await createToken(existedUser);
};

const registerUser = async (body: ICreateUserInput): Promise<void> => {
  // validate body
  const validationRule = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(config.usersModuleConfig.passwordRegex).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    roles: Joi.array().required()
  });
  const { error } = Joi.validate(body, validationRule, {
    allowUnknown: true,
  });
  if (error) {
    throw new Error(error.details[0].message);
  }

  // check if email exist
  const existedUser = await userRepository.findUserByEmail(body.email);
  if (existedUser) {
    throw new Error('Email has Been Used');
  }

  // create new user
  const userWithFullname = addFullName(body);
  const userWithHashPassword = {
    ...userWithFullname,
    isActive: true,
    emailConfirmed: false,
    password: await bcrypt.hash(userWithFullname.password, userWithFullname.password.length),
  };
  await userRepository.createUser(userWithHashPassword);
};

export default {
  checkEmailExist,
  loginLocal,
  registerUser,
  refreshToken,
};