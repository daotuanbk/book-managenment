"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersModuleConfig = {
    usersModuleConfig: {
        usernameRegex: /^[a-zA-Z0-9]{6,30}$/,
        passwordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    },
};
exports.default = usersModuleConfig;
//# sourceMappingURL=users.config.js.map