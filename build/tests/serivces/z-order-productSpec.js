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
const order_product_1 = require("../../serivces/order-product");
const orderProductForTest = new order_product_1.OrderProduct();
const dataFortest = {
    order_id: 1,
    product_id: 1,
    quantity: 2
};
describe("test order-product model", () => {
    it("should create new row", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderProductForTest.create(1, 1, 2);
        expect(data).toEqual([dataFortest]);
    }));
    it("should return data of order", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderProductForTest.index(1);
        expect(data[0].name).toEqual("TV");
    }));
    it("should return data of orders of user", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderProductForTest.indexUser(1);
        expect(data[0].name).toEqual("TV");
    }));
    it("should return data of orders of user without orderId", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderProductForTest.orderOfUser(1);
        expect(data[0].name).toEqual("TV");
    }));
});
