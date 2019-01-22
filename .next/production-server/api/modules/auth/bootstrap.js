"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./users/router");
const router_2 = require("./auth/router");
const router_3 = require("./roles/router");
const bootstrapAuth = (router) => {
    router.use('/users', router_1.default);
    router.use('/roles', router_3.default);
    router.use('/auth', router_2.default);
};
exports.default = bootstrapAuth;
//# sourceMappingURL=bootstrap.js.map