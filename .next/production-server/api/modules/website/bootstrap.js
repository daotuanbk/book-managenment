"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./book-managenment/router");
const router_2 = require("./lent-managenment/router");
const router_3 = require("./upload-image/router");
const bootstrapWebsite = (router) => {
    router.use('/book', router_1.default);
    router.use('/lent', router_2.default);
    router.use('/images', router_3.default);
};
exports.default = bootstrapWebsite;
//# sourceMappingURL=bootstrap.js.map