"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bootstrapNextjs_1 = require("./nextjs/bootstrapNextjs");
const api_1 = require("./api");
const configs_1 = require("./configs");
const bootstrap = async () => {
    const port = parseInt(process.env.PORT ? process.env.PORT : '', 10) || 3000;
    const server = express();
    // Connect To MongoDB
    await mongoose.connect(configs_1.default.database.mongoConnectionString, { useNewUrlParser: true });
    // Middleware
    server.use(cors({
        origin: configs_1.default.nextjs.corsOrigin,
        credentials: true,
    }));
    server.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
    server.use(bodyParser.json());
    server.use(cookieParser());
    await bootstrapNextjs_1.bootstrapNextjs(server);
    server.use('/api', api_1.default);
    await server.listen(port);
    process.on('SIGINT', () => {
        /* tslint:disable-next-line:no-console */
        console.log(`\nShutting down the server...Goodbye.\n`);
        process.exit();
    });
};
bootstrap();
//# sourceMappingURL=index.js.map