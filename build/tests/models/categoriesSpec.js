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
const categories_1 = require("../../model/categories");
const categoryForTest = new categories_1.Categories();
const testdata = {
    category_id: 1,
    name: "potato"
};
describe("category for test", () => {
    it("should return all data", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield categoryForTest.index();
        expect(data).toEqual([]);
    }));
    it("should create new category", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield categoryForTest.create(testdata);
        expect(data).toEqual(1);
    }));
    it("should return 1 item", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield categoryForTest.show(1);
        expect(data).toEqual([testdata]);
    }));
});
