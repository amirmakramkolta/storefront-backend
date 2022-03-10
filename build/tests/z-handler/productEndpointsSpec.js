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
const productEndpoints_1 = require("../../handler/productEndpoints");
const supertest_1 = __importDefault(require("supertest"));
describe("product handler test", () => {
    it("should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, supertest_1.default)(productEndpoints_1.productRoutes).get("/products").expect(200);
        (0, supertest_1.default)(productEndpoints_1.productRoutes).get("/products/1").expect(200);
    }));
    it("should return 401", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, supertest_1.default)(productEndpoints_1.productRoutes).post("/create-product").expect(401);
    }));
});
