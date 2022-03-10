import { Categories,categoryType } from "../../model/categories";
const categoryForTest = new Categories();
const testdata={
    category_id:1,
    name:"potato"
}
describe("category for test",()=>{
    it("should return all data",async()=>{
        const data = await categoryForTest.index();
        expect(data).toEqual([]);
    })
    it("should create new category",async()=>{
        const data = await categoryForTest.create(testdata);
        expect(data).toEqual([testdata]);
    })
    it("should return 1 item",async()=>{
        const data = await categoryForTest.show(1);
        expect(data).toEqual([testdata])
    })
})
