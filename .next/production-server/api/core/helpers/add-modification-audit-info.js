"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addModificationAuditInfo = (req, model) => {
    return {
        ...model,
        lastModifiedBy: req.email,
        lastModifiedAt: new Date(),
    };
};
exports.default = addModificationAuditInfo;
//# sourceMappingURL=add-modification-audit-info.js.map