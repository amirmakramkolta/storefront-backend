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
Object.defineProperty(exports, "__esModule", { value: true });
const storeUsers_1 = require("../../model/storeUsers");
const userForTest = new storeUsers_1.Users();
const dataTest = {
    store_user_id: 1,
    first_name: "A",
    last_name: "M",
    email: "am@am.com",
    hash_password: "1234"
};
const dataTestNoPassword = {
    store_user_id: 1,
    first_name: "A",
    last_name: "M",
    email: "am@am.com"
};
describe("Test User Model", () => {
    it("should return all data", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield userForTest.index();
        expect(data).toEqual([]);
    }));
    it("should create new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield userForTest.create(dataTest);
        expect(data).toEqual(dataTestNoPassword);
    }));
    it("should return data", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield userForTest.show(dataTest.email);
        expect(data).toEqual([dataTestNoPassword]);
    }));
    it("should signin", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield userForTest.signin(dataTest.email, dataTest.hash_password);
        expect(data).toEqual(dataTestNoPassword);
    }));
});
