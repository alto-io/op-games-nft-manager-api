"use strict";
'use_strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function main() {
    const server = express_1.default();
    const PORT = 2002 || process.env.PORT;
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
exports.default = main;
