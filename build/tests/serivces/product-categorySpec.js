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
const product_category_1 = require("../../serivces/product-category");
const productCategoruForTest = new product_category_1.ProductCategory();
describe("Test product-category serivces", () => {
    it("should return products with category name", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield productCategoruForTest.index();
        expect(data[0].category_name).toEqual("potato");
    }));
    it("should return one product with category name", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield productCategoruForTest.show(1);
        expect(data[0].category_name).toEqual("potato");
    }));
    it("should return products in category", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield productCategoruForTest.showProducts(1);
        expect(data[0].product_name).toEqual("TV");
    }));
});
