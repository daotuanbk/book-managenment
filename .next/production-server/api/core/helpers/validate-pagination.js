"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const configs_1 = require("../../../configs");
const validatePagination = (query) => {
    const pageNumber = query.pageNumber
        ? _.parseInt(query.pageNumber.toString())
        : 1;
    const pageSize = query.pageSize
        ? _.parseInt(query.pageSize.toString())
        : configs_1.default.app.defaultPageSize;
    return {
        ...query,
        pageSize,
        pageNumber,
    };
};
exports.default = validatePagination;
//# sourceMappingURL=validate-pagination.js.map