import client from "../database";

export type productType = {
    product_id:number|null,
    name:string,
    price:number,
    category_id:number
}

export class Products{
    async index():Promise<productType[]>{
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
    async show(id:number):Promise<productType[]>{
        try{
            const connect = await client.connect();
            const sql = "select * from product where product_id = $1";
            const result = await connect.query(sql,[id]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async create(p:productType):Promise<number>{
        try{
            const connect = await client.connect();
            const sql = "insert into product (name, price, category_id)values($1, $2, $3)";
            const result = await connect.query(sql,[p.name,p.price,p.category_id]);
            connect.release();
            return result.rowCount;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
}