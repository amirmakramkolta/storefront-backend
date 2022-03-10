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
const userEndpoints_1 = require("../../handler/userEndpoints");
const supertest_1 = __importDefault(require("supertest"));
describe("user handler Test", () => {
    it("should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, supertest_1.default)(userEndpoints_1.userRoutes).post("/create").send({
            firstname: "A",
            lastname: "M",
            email: "pew@am.com",
            password: "1234"
        }).expect(200);
    }));
    it("should return 401 for no token", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, supertest_1.default)(userEndpoints_1.userRoutes).get("/user").expect(401);
        (0, supertest_1.default)(userEndpoints_1.userRoutes).get("/users").expect(401);
    }));
    it("should signin", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, supertest_1.default)(userEndpoints_1.userRoutes).post("/signin").send({
            email: "pew@am.com",
            password: "1234"
        }).expect(200);
    }));
});
