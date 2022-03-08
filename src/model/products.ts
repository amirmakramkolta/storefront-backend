import client from "../database";

export type product = {
    productId:number,
    name:string,
    price:number,
    categoryId:number
}

export class Products{
    async index():Promise<product[]>{
        try{
            const connect = await client.connect();
            const sql = "select * from product";
            const result = await connect.query(sql);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async show(id:number):Promise<product[]>{
        try{
            const connect = await client.connect();
            const sql = "select * from product where id = $1";
            const result = await connect.query(sql,[id]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async create(p:product):Promise<Products[]>{
        try{
            const connect = await client.connect();
            const sql = "insert into product (name, price, categoryId)values($1, $2, $3)";
            const result = await connect.query(sql,[p.name,p.price,p.categoryId]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
}