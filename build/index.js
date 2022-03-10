"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userEndpoints_1 = require("./handler/userEndpoints");
const categoryEndpoints_1 = require("./handler/categoryEndpoints");
const productEndpoints_1 = require("./handler/productEndpoints");
const orderEndpoints_1 = require("./handler/orderEndpoints");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
(0, userEndpoints_1.userRoutes)(app);
(0, categoryEndpoints_1.cateoryRoutes)(app);
(0, productEndpoints_1.productRoutes)(app);
(0, orderEndpoints_1.orderRoutes)(app);
app.listen(port, () => {
    console.log(`listen to: http://localhost:${port}`);
});
