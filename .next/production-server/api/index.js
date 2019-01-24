"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bootstrap_1 = require("./modules/auth/bootstrap");
const bootstrap_2 = require("./modules/website/bootstrap");
const apiRouter = express.Router();
// Bootstrap API
bootstrap_1.default(apiRouter);
bootstrap_2.default(apiRouter);
exports.default = apiRouter;
//# sourceMappingURL=index.js.map