"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addCreationAuditInfo = (req, model) => {
    return {
        ...model,
        createdBy: req.email,
        createdAt: new Date(),
    };
};
exports.default = addCreationAuditInfo;
//# sourceMappingURL=add-creation-audit-info.js.map