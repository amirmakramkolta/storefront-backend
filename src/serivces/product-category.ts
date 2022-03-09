import client from "../database";

export class ProductCategory{
    async index(){
        try{
            const connect = await client.connect();
            const sql = `select product.name as product_name, product.price, category.name as category_name 
                        from product join category 
                        on product.category_id = category.category_id`;
            const result  = await connect.query(sql);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`somthing wrong ${err}`) 
        }
    }
    async show(id:number){
        try{
            const connect = await client.connect();
            const sql = `select product.name as product_name, product.price, category.name as category_name
                        from product join category
                        on product.category_id = category.category_id
                        where product.product_id = $1`;
            const result  = await connect.query(sql,[id]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`somthing wrong ${err}`) 
        }
    }
    async showProducts(id:number){
        try{
            const connect = await client.connect();
            const sql = `select product.name as product_name, product.price, category.name as category_name
            from product join category
            on product.category_id = category.category_id
            where category.category_id = $1`;
            const result  = await connect.query(sql,[id]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`somthing wrong ${err}`) 
        }
    }
    
}