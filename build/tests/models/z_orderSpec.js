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
const orders_1 = require("../../model/orders");
const orderForTest = new orders_1.Orders();
const dataTest = {
    order_id: 1,
    store_user_id: 1,
    status_of_order: "complete"
};
describe("Test order model", () => {
    it("should return all data", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderForTest.index();
        expect(data).toEqual([]);
    }));
    it("should create empty order", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderForTest.create(dataTest);
        expect(data).toEqual(1);
    }));
    it("should return orders of user", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderForTest.getOrdersByUser(1);
        expect(data).toEqual([dataTest]);
    }));
    it("should return completed orders of user", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield orderForTest.getCompleteOrdersByUser(1);
        expect(data).toEqual([dataTest]);
    }));
});
