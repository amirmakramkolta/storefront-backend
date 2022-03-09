import { orderType, Orders } from "../../model/orders";

const orderForTest = new Orders();
const dataTest:orderType = {
    order_id:1,
    store_user_id:1,
    status_of_order:"complete"
}
describe("Test order model",()=>{
    it("should return all data",async()=>{
        const data = await orderForTest.index();
        expect(data).toEqual([])
    })
    it("should create empty order",async()=>{
        const data = await orderForTest.create(dataTest);
        expect(data).toEqual(1);
    })
    it("should return orders of user",async()=>{
        const data = await orderForTest.getOrdersByUser(1);
        expect(data).toEqual([dataTest])
    })
    it("should return completed orders of user",async()=>{
        const data = await orderForTest.getCompleteOrdersByUser(1);
        expect(data).toEqual([dataTest])
    })
})
