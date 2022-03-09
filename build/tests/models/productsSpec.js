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
const products_1 = require("../../model/products");
const productForTest = new products_1.Products();
const dataTest = {
    product_id: 1,
    name: "TV",
    price: 30,
    category_id: 1
};
describe("Product for test", () => {
    it("should return all data", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield productForTest.index();
        expect(data).toEqual([]);
    }));
    it("should create new product", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield productForTest.create(dataTest);
        expect(data).toEqual(1);
    }));
    it("should return 1 item", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield productForTest.show(1);
        expect(data).toEqual([dataTest]);
    }));
});
