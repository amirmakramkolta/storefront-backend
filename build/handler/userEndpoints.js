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
exports.userRoutes = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const storeUsers_1 = require("../model/storeUsers");
dotenv_1.default.config();
const userForRoutes = new storeUsers_1.Users();
const userRoutes = (app) => {
    app.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const newUserData = {
            store_user_id: 0,
            first_name: req.params.firstName,
            last_name: req.params.lastName,
            email: req.params.email,
            hash_password: req.params.password
        };
        try {
            const data = yield userForRoutes.create(newUserData);
            // const token = jwt.sign({email:data.email,id:data.store_user_id},(process.env.secret as string));
            res.status(200);
            res.json(data);
        }
        catch (err) {
            res.status(400);
            res.json(err);
        }
    }));
    app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const loginUser = {
            email: req.params.email,
            password: req.params.password
        };
        try {
            const data = yield userForRoutes.signin(loginUser.email, loginUser.password);
            if (data == null) {
                res.status(404);
                res.json("sorry user not found");
            }
            else {
                const token = jsonwebtoken_1.default.sign({ email: data.email, id: data.store_user_id }, process.env.secret);
                res.status(200);
                res.json(token);
            }
        }
        catch (err) {
            res.status(400);
            res.json(err);
        }
    }));
    app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.params.token;
        try {
            jsonwebtoken_1.default.verify(data, process.env.secret);
        }
        catch (err) {
            res.status(401);
            res.json("sorry data not valid");
            return;
        }
        try {
            const allUsers = yield userForRoutes.index();
            res.status(200);
            res.json(allUsers);
        }
        catch (err) {
            res.status(500);
            res.json(err);
        }
    }));
    app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.params.token;
        {
            try {
                jsonwebtoken_1.default.verify(data, process.env.secret);
            }
            catch (err) {
                res.status(401);
                res.json("sorry data not valid");
                return;
            }
            try {
                const userData = jsonwebtoken_1.default.decode(data);
                if (userData == null) {
                    res.status(400);
                    res.json("something wrong");
                }
                else {
                    const OneUser = yield userForRoutes.show(JSON.parse(data).email);
                    res.status(200);
                    res.json(OneUser);
                }
            }
            catch (err) {
                res.status(500);
                res.json(err);
            }
        }
    }));
};
exports.userRoutes = userRoutes;
