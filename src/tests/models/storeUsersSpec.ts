import { Users, userType, userTypeNoPassword } from "../../model/storeUsers";

const userForTest = new Users();
const dataTest:userType={
    store_user_id:1,
    first_name:"A",
    last_name:"M",
    email:"am@am.com",
    hash_password:"1234"
}
const dataTestNoPassword:userTypeNoPassword={
    store_user_id:1,
    first_name:"A",
    last_name:"M",
    email:"am@am.com"
}

describe("Test User Model",()=>{
    it("should return all data",async()=>{
        const data = await userForTest.index();
        expect(data).toEqual([]);
    })
    it("should create new user",async()=>{
        const data = await userForTest.create(dataTest);
        expect(data).toEqual(dataTestNoPassword);
    })
    it("should return data",async()=>{
        const data = await userForTest.show(dataTest.email);
        expect(data).toEqual([dataTestNoPassword]);
    })
    it("should signin",async()=>{
        const data = await userForTest.signin(dataTest.email,dataTest.hash_password);
        expect(data).toEqual(dataTestNoPassword)
    })
})
