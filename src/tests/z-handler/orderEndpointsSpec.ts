import { orderRoutes } from "../../handler/orderEndpoints";
import supertest from "supertest";

describe("order handler test",()=>{
    it("should return 401",async()=>{
        supertest(orderRoutes).post("/create-order").expect(401);
        supertest(orderRoutes).post("/add-product/1").expect(401);
        supertest(orderRoutes).post("/my-orders").expect(401);
    })
})