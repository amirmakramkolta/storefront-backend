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
exports.OrderProduct = void 0;
const database_1 = __importDefault(require("../database"));
class OrderProduct {
    index(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = `select s_order.order_id, product.name, product.price, product_order.quantity 
                        from s_order join product_order 
                        on s_order.order_id = product_order.order_id
                        join product on product.product_id = product_order.product_id
                        where s_order.order_id = $1`;
                const result = yield database_1.default.query(sql, [orderId]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`somthing wrong${err}`);
            }
        });
    }
    indexUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = `select s_order.order_id, product.name, product.price, product_order.quantity 
                        from s_order join product_order 
                        on s_order.order_id = product_order.order_id
                        join product on product.product_id = product_order.product_id
                        where s_order.store_user_id = $1`;
                const result = yield database_1.default.query(sql, [userId]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`somthing wrong${err}`);
            }
        });
    }
    create(orderId, productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = `insert into product_order (order_id, product_id, quantity) values ($1, $2, $3)`;
                const result = yield database_1.default.query(sql, [orderId, productId, quantity]);
                connect.release();
                return result.rowCount;
            }
            catch (err) {
                throw new Error(`somthing wrong${err}`);
            }
        });
    }
}
exports.OrderProduct = OrderProduct;
