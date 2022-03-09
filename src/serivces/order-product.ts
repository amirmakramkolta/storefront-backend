import client from "../database";

export class OrderProduct{
    async index(orderId:number){
        try{
            const connect = await client.connect();
            const sql = `select s_order.order_id, product.name, product.price, product_order.quantity 
                        from s_order join product_order 
                        on s_order.order_id = product_order.order_id
                        join product on product.product_id = product_order.product_id
                        where s_order.order_id = $1`
            const result = await client.query(sql,[orderId]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`somthing wrong${err}`)
        }
    }
    async indexUser(userId:number){
        try{
            const connect = await client.connect();
            const sql = `select s_order.order_id, product.name, product.price, product_order.quantity 
                        from s_order join product_order 
                        on s_order.order_id = product_order.order_id
                        join product on product.product_id = product_order.product_id
                        where s_order.store_user_id = $1`
            const result = await client.query(sql,[userId]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`somthing wrong${err}`)
        }
    }
    async create(orderId:number,productId:number,quantity:number){
        try{
            const connect = await client.connect();
            const sql = `insert into product_order (order_id, product_id, quantity) values ($1, $2, $3)`;
            const result = await client.query(sql,[orderId, productId, quantity]);
            connect.release();
            return result.rowCount;
        }catch(err){
            throw new Error(`somthing wrong${err}`)
        }
    }
}