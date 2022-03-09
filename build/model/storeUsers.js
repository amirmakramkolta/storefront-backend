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
exports.Users = void 0;
const database_1 = __importDefault(require("../database"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
class Users {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "select store_user_id, first_name, last_name, email from store_user";
                const result = yield connect.query(sql);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "insert into store_user (first_name, last_name, email, hash_password) values ($1, $2, $3, $4)";
                const hash_password = bcrypt_1.default.hashSync(u.hash_password + process.env.pepper, parseInt(process.env.salt));
                const result = yield connect.query(sql, [u.first_name, u.last_name, u.email, hash_password]);
                const sql2 = "select email from store_user where email = $1";
                const result2 = yield connect.query(sql2, [u.email]);
                connect.release();
                return result2.rows[0].email;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    show(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "select store_user_id, first_name, last_name, email from store_user where email = $1";
                const result = yield connect.query(sql, [email]);
                connect.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
    signin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connect = yield database_1.default.connect();
                const sql = "select * from store_user where email = $1";
                const result = yield connect.query(sql, [email]);
                connect.release();
                const user = result.rows[0];
                if (bcrypt_1.default.compareSync(password + process.env.pepper, user.hash_password)) {
                    return result.rows[0].email;
                }
                else {
                    return null;
                }
            }
            catch (err) {
                throw new Error(`something wrong ${err}`);
            }
        });
    }
}
exports.Users = Users;
