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
exports.showAllProducts = exports.showProduct = exports.create = exports.show = exports.index = exports.cateoryRoutes = void 0;
const categories_1 = require("../model/categories");
const product_category_1 = require("../serivces/product-category");
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const categoryForRoutes = new categories_1.Categories();
const productCategoryForRoutes = new product_category_1.ProductCategory();
const cateoryRoutes = (app) => {
    app.post("/create-category", exports.create);
    app.get("/categories", exports.index);
    app.get("/categories/:id", exports.show);
    app.get("/productsIncategory/", exports.showAllProducts);
    app.get("/productsIncategory/:id", exports.showProduct);
};
exports.cateoryRoutes = cateoryRoutes;
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield categoryForRoutes.index();
        res.status(200);
        res.json(data);
    }
    catch (err) {
        res.status(400);
        res.json(`something wrong ${err}`);
    }
});
exports.index = index;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield categoryForRoutes.show(parseInt(req.params.id));
        res.status(200);
        res.json(data);
    }
    catch (err) {
        res.status(400);
        res.json(`something wrong ${err}`);
    }
});
exports.show = show;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        jsonwebtoken_1.default.verify(req.body.token, process.env.secret);
    }
    catch (err) {
        res.status(401);
        res.json(`something wrong ${err}`);
        return;
    }
    const dataFromUser = {
        category_id: 0,
        name: req.body.name
    };
    try {
        const data = yield categoryForRoutes.create(dataFromUser);
        res.status(200);
        res.json(data);
    }
    catch (err) {
        res.status(400);
        res.json(`something wrong ${err}`);
        return;
    }
});
exports.create = create;
const showProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productCategoryForRoutes.show(parseInt(req.params.id));
        res.status(200);
        res.json(data);
    }
    catch (err) {
        res.status(400);
        res.json(`something wrong ${err}`);
    }
});
exports.showProduct = showProduct;
const showAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield productCategoryForRoutes.index();
        res.status(200);
        res.json(data);
    }
    catch (err) {
        res.status(400);
        res.json(`something wrong ${err}`);
    }
});
exports.showAllProducts = showAllProducts;
