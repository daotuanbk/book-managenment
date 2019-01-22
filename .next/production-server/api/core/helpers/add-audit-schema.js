"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addAuditSchema = (definition) => {
    return {
        ...definition,
        createdBy: {
            type: String,
            es_type: "text"
        },
        createdAt: Date,
        lastModifiedBy: {
            type: String,
            es_type: "text"
        },
        lastModifiedAt: Date,
    };
};
exports.default = addAuditSchema;
//# sourceMappingURL=add-audit-schema.js.map