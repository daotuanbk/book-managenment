const usersModuleConfig = {
  usersModuleConfig: {
    usernameRegex: /^[a-zA-Z0-9]{6,30}$/,
    passwordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  },
};

export default usersModuleConfig;
