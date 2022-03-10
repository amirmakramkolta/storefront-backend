import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Orders, orderType } from '../model/orders';
import { OrderProduct } from '../serivces/order-product';
import express, { Application } from 'express';

dotenv.config();
const orderForRoutes = new Orders();
const orderProductForRoutes = new OrderProduct();

export const orderRoutes = (app:express.Application)=>{
    app.post("/create-order",async(req:express.Request,res:express.Response)=>{
        try{
            jwt.verify(req.body.token,(process.env.secret as string))
        }catch(err){
            res.status(401);
            res.json(`something wrong ${err}`);
            return
        }
        try{
            const userData = jwt.decode(req.body.token) as jwt.JwtPayload
            const dataFromUser:orderType = {
                order_id:0,
                store_user_id:parseInt(userData.id),
                status_of_order:"active"
            }
            const data = await orderForRoutes.create(dataFromUser);
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    })
    app.post("/add-product/:id",async(req:express.Request,res:express.Response)=>{
        try{
            jwt.verify(req.body.token,(process.env.secret as string))
        }catch(err){
            res.status(401);
            res.json(`something wrong ${err}`);
            return
        }
        try{
            const data = await orderProductForRoutes.create(parseInt(req.params.id),parseInt(req.body.productId),parseInt(req.body.quantity));
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    })
    app.get("/my-orders",async(req:express.Request,res:express.Response)=>{
        try{
            jwt.verify(req.body.token,(process.env.secret as string))
        }catch(err){
            res.status(401);
            res.json(`something wrong ${err}`);
            return
        }
        const userData = jwt.decode(req.body.token) as jwt.JwtPayload;
        try{
            const dataFromOrder = await orderForRoutes.getOrdersByUser(parseInt(userData.id));
            const dataFromOrderProduct = await orderProductForRoutes.indexUser(parseInt(userData.id));
            const data ={
                order: [] as unknown[]
            }
            for (const order of dataFromOrder) {
                const orderToGo= {
                    orderId:order.order_id,
                    userId:order.store_user_id,
                    status:order.status_of_order,
                    products:[] as unknown[]
                }
                for (const product of dataFromOrderProduct) {
                    if(order.order_id==product.order_id){
                        const productToGo = {
                            productId: product.product_id,
                            productName: product.name,
                            productPrice: product.price,
                            productQuantity: product.quantity,
                            productCategory: product.category
                        }
                        orderToGo.products.push(productToGo)
                    }
                }
                data.order.push(orderToGo);
            }
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    })
}
