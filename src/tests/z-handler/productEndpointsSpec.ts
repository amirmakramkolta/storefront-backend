import { productRoutes } from "../../handler/productEndpoints";
import supertest from "supertest";

describe("product handler test",()=>{
    it("should return 200",async()=>{
        supertest(productRoutes).get("/products").expect(200);
        supertest(productRoutes).get("/products/1").expect(200);
    })
    it("should return 401",async()=>{
        supertest(productRoutes).post("/create-product").expect(401);
    })
})