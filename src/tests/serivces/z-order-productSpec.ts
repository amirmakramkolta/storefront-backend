import { OrderProduct } from "../../serivces/order-product";

const orderProductForTest = new OrderProduct();

describe("test order-product model",()=>{
    it("should create new row",async()=>{
        const data = await orderProductForTest.create(1,1,2);
        expect(data).toEqual(1);
    })
    it("should return data of order",async()=>{
        const data = await orderProductForTest.index(1);
        expect(data[0].name).toEqual("TV");
    })
    it("should return data of orders of user",async()=>{
        const data = await orderProductForTest.indexUser(1);
        expect(data[0].name).toEqual("TV");
    })
    
})