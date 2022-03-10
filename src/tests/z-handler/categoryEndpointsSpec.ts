import { cateoryRoutes } from "../../handler/categoryEndpoints";
import supertest from "supertest";

describe("category handler test",()=>{
    it("should return 200",async()=>{
        supertest(cateoryRoutes).get("/categories").expect(200);
        supertest(cateoryRoutes).get("/categories/1").expect(200);
        supertest(cateoryRoutes).get("productsIncategory").expect(200);
        supertest(cateoryRoutes).get("productsIncategory/1").expect(200);

    })
    it("should return 401",async()=>{
        supertest(cateoryRoutes).post("/create-category").expect(401)
    })
})