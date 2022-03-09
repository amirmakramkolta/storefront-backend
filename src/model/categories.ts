import client from "../database";

export type categoryType  = {
    id:number
    name:string
}

export class Categories{
    async index():Promise<categoryType[]>{
        try{
            const connect = await client.connect();
            const sql = "select * from category"
            const result = await connect.query(sql);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`something wrong ${err}`)
        }
    }
    async show(id:number):Promise<categoryType[]>{
        try{
            const connect = await client.connect();
            const sql = "select * from category where category_id = $1"
            const result = await connect.query(sql,[id]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`something wrong ${err}`)
        }
    }
    async create(c:categoryType):Promise<categoryType[]>{
        try{
            const connect = await client.connect();
            const sql = "insert  into category (name) values ($1)"
            const result = await connect.query(sql,[c.name]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`something wrong ${err}`)
        }
    }
}