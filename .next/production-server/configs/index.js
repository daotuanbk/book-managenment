"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_config_1 = require("./default.config");
const users_config_1 = require("./modules/users.config");
const development_config_1 = require("./development.config");
const production_config_1 = require("./production.config");
const _ = require("lodash");
const environmentConfig = process.env.NODE_ENV === 'production' ? production_config_1.default : development_config_1.default;
const config = _.merge({}, default_config_1.default, users_config_1.default, environmentConfig);
exports.default = config;
//# sourceMappingURL=index.js.map