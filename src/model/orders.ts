import client from "../database";

export type orderType={
    order_id:number,
    store_user_id:number,
    status_of_order:string
}

export class Orders{
    async index():Promise<orderType[]>{
        try{
            const connect = await client.connect();
            const sql = " select * from s_order";
            const result = await connect.query(sql);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async create(o:orderType):Promise<number>{
        try{
            const connect = await client.connect();
            const sql = "insert into s_order (store_user_id ,status_of_order) values ($1, $2)";
            const result = await connect.query(sql,[o.store_user_id,o.status_of_order]);
            connect.release();
            return result.rowCount;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async getOrdersByUser(id:number){
        try{
            const connect = await client.connect();
            const sql = " select * from s_order where store_user_id = $1";
            const result = await connect.query(sql,[id]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async getCompleteOrdersByUser(id:number){
        try{
            const connect = await client.connect();
            const sql = ` select * from s_order where store_user_id = $1 and status_of_order='complete'`;
            const result = await connect.query(sql,[id]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
}