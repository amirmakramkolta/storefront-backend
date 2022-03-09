"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
let client;
if (process.env.env_node == "dev") {
    client = new pg_1.Pool({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
}
else {
    client = new pg_1.Pool({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database_test
    });
}
exports.default = client;
