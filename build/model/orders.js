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
exports.Orders = void 0;
const database_1 = __importDefault(require("../database"));
class Orders {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = " select * from s_order";
                const result = yield connect.query(sql);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    create(o) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "insert into s_order (store_user_id ,status_of_order) values ($1, $2)";
                const result = yield connect.query(sql, [o.store_user_id, o.status_of_order]);
                const sql2 = `select * from s_order 
                          order by order_id desc
                          limit 1`;
                const result2 = yield connect.query(sql2);
                connect.release();
                return result2.rows[0];
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    getOrdersByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = " select * from s_order where store_user_id = $1";
                const result = yield connect.query(sql, [id]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    getCompleteOrdersByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = ` select * from s_order where store_user_id = $1 and status_of_order='complete'`;
                const result = yield connect.query(sql, [id]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
}
exports.Orders = Orders;
