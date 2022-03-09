import { ProductCategory } from "../../serivces/product-category";

const productCategoruForTest = new ProductCategory();

describe("Test product-category serivces",()=>{
    it("should return products with category name",async()=>{
        const data = await productCategoruForTest.index();
        expect(data[0].category_name).toEqual("potato");
    })
    it("should return one product with category name", async()=>{
        const data = await productCategoruForTest.show(1)
        expect(data[0].category_name).toEqual("potato");
    })
    it("should return products in category",async()=>{
        const data = await productCategoruForTest.showProducts(1);
        expect(data[0].product_name).toEqual("TV")
    })
})
