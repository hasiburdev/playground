"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStringToDate = void 0;
const dataStringToDate = (dateString) => {
    const [month, day, year] = dateString
        .split("/")
        .map((item) => parseInt(item));
    return new Date(month - 1, day, year);
};
exports.dataStringToDate = dataStringToDate;
