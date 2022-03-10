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
            const sql = `select s_order.order_id, product.name, product.price, product_order.quantity, category.name as category
                        from s_order join product_order 
                        on s_order.order_id = product_order.order_id
                        join product on product.product_id = product_order.product_id
                        join category on product.category_id = category.category_id
                        where s_order.store_user_id = $1`
            const result = await client.query(sql,[userId]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`somthing wrong${err}`)
        }
    }
    async orderOfUser(userId:number){
        try{
            const connect = await client.connect();
            const sql = `select product.name, product.price, product_order.quantity, category.name as category
                        from s_order join product_order 
                        on s_order.order_id = product_order.order_id
                        join product on product.product_id = product_order.product_id
                        join category on product.category_id = category.category_id
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
            const sql2 = `select * from product_order where order_id = $1 and product_id = $2`;
            const result2 = await client.query(sql2,[orderId,productId]);
            connect.release();
            return result2.rows;
        }catch(err){
            throw new Error(`somthing wrong${err}`)
        }
    }
}