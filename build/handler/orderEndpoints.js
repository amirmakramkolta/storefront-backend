"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const orders_1 = require("../model/orders");
const order_product_1 = require("../serivces/order-product");
dotenv_1.default.config();
const orderForRoutes = new orders_1.Orders();
const orderProductForRoutes = new order_product_1.OrderProduct();
const orderRoutes = (app) => {
    app.post("/create-order", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            jsonwebtoken_1.default.verify(req.body.token, process.env.secret);
        }
        catch (err) {
            res.status(401);
            res.json(`something wrong ${err}`);
            return;
        }
        try {
            const userData = jsonwebtoken_1.default.decode(req.body.token);
            const dataFromUser = {
                order_id: 0,
                store_user_id: parseInt(userData.id),
                status_of_order: "active"
            };
            const data = orderForRoutes.create(dataFromUser);
            res.status(200);
            res.json("yur order created");
        }
        catch (err) {
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    }));
    app.get("/my-orders", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            jsonwebtoken_1.default.verify(req.body.token, process.env.secret);
        }
        catch (err) {
            res.status(401);
            res.json(`something wrong ${err}`);
            return;
        }
        const userData = jsonwebtoken_1.default.decode(req.body.token);
        try {
            const dataFromOrder = orderForRoutes.getOrdersByUser(parseInt(userData.id));
            const dataFromOrderProduct = orderProductForRoutes.orderOfUser(parseInt(userData.id));
            const data = {
                order: dataFromOrder,
                products: dataFromOrderProduct
            };
            res.status(200);
            res.json(data);
        }
        catch (err) {
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    }));
};
exports.orderRoutes = orderRoutes;
