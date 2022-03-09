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
exports.ProductCategory = void 0;
const database_1 = __importDefault(require("../database"));
class ProductCategory {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = `select product.name as product_name, product.price, category.name as category_name 
                        from product join category 
                        on product.category_id = category.category_id`;
                const result = yield connect.query(sql);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`somthing wrong ${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = `select product.name as product_name, product.price, category.name as category_name
                        from product join category
                        on product.category_id = category.category_id
                        where product.product_id = $1`;
                const result = yield connect.query(sql, [id]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`somthing wrong ${err}`);
            }
        });
    }
    showProducts(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = `select product.name as product_name, product.price, category.name as category_name
            from product join category
            on product.category_id = category.category_id
            where category.category_id = $1`;
                const result = yield connect.query(sql, [id]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`somthing wrong ${err}`);
            }
        });
    }
}
exports.ProductCategory = ProductCategory;
