import defaultConfig from './production/default.config';
import usersModuleConfig from './modules/users.config';
import developmentConfig from './development.config';
import productionConfig from './production.config';
import * as _ from 'lodash';

const environmentConfig = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
const config = _.merge({}, defaultConfig, usersModuleConfig, environmentConfig);
export default config;
