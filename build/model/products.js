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
exports.Products = void 0;
const database_1 = __importDefault(require("../database"));
class Products {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "select * from product";
                const result = yield connect.query(sql);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "select * from product where product_id = $1";
                const result = yield connect.query(sql, [id]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "insert into product (name, price, category_id)values($1, $2, $3)";
                const result = yield connect.query(sql, [p.name, p.price, p.category_id]);
                connect.release();
                return result.rowCount;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
}
exports.Products = Products;
