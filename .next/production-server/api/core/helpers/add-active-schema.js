"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addActiveSchema = (definition) => {
    return {
        ...definition,
        isActive: Boolean,
    };
};
exports.default = addActiveSchema;
//# sourceMappingURL=add-active-schema.js.map