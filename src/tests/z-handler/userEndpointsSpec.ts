import { userRoutes } from "../../handler/userEndpoints";
import superTest from 'supertest';

describe("user handler Test",()=>{
    it("should return 200",async()=>{
        superTest(userRoutes).post("/create").send({
            firstname:"A",
            lastname:"M",
            email:"pew@am.com",
            password:"1234"
        }).expect(200)
    })
    it("should return 401 for no token",async()=>{
        superTest(userRoutes).get("/user").expect(401)
        superTest(userRoutes).get("/users").expect(401)
    })
    it("should signin",async()=>{
        superTest(userRoutes).post("/signin").send({
            email:"pew@am.com",
            password:"1234"
        }).expect(200)
    })
})
