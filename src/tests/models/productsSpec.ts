import { Products, productType } from "../../model/products";

const productForTest = new Products();
const dataTest:productType = {
    product_id:1,
    name:"TV",
    price:30,
    category_id:1
}

describe("Product for test",()=>{
    it("should return all data",async()=>{
        const data = await productForTest.index();
        expect(data).toEqual([]);
    })
    it("should create new product",async()=>{
        const data = await productForTest.create(dataTest);
        expect(data).toEqual([dataTest]);
    })
    it("should return 1 item", async()=>{
        const data = await productForTest.show(1);
        expect(data).toEqual([dataTest])
    })
})