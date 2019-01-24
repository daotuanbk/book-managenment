"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
const setupLogger = () => {
    if (process.env.NODE_ENV === 'development') {
        log4js.configure({
            appenders: { console: { type: 'console' } },
            categories: { default: { appenders: ['console'], level: 'ALL' } },
        });
    }
    else {
        log4js.configure({
            appenders: {
                everything: { type: 'dateFile', filename: 'logs/logs.log' },
            },
            categories: {
                default: { appenders: ['everything'], level: 'ALL' },
            },
        });
    }
};
exports.setupLogger = setupLogger;
const logger = log4js.getLogger();
logger.level = 'debug'; // default level is OFF - which means no logs at all.
exports.default = logger;
//# sourceMappingURL=log4js.js.map