import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {Users, userType, userTypeNoPassword} from '../model/storeUsers'

dotenv.config();
const userForRoutes = new Users();

export const userRoutes =(app:express.Application)=>{
    app.post("/create-user",async (req:express.Request,res:express.Response)=>{
        const newUserData:userType={
            store_user_id:0,
            first_name:req.body.firstname as string,
            last_name:req.body.lastname as string,
            email:req.body.email as string,
            hash_password:req.body.password as string
        }
        try{
            const data:userTypeNoPassword = await userForRoutes.create(newUserData);
            const token = jwt.sign({email:data.email,id:data.store_user_id},(process.env.secret as string));
            res.status(200);
            res.json(token);
        }catch(err){
            res.status(400)
            res.json(`something wrong ${err}`)
        }
    });
    app.post("/signin",async(req:express.Request,res:express.Response)=>{
        const loginUser ={
            email: req.body.email,
            password: req.body.password
        }
        try{
            const data:userTypeNoPassword|null = await userForRoutes.signin(loginUser.email,loginUser.password);
            if(data==null){
                res.status(404);
                res.json("sorry user not found")
            }else{
                const token = jwt.sign({email:data.email,id:data.store_user_id},(process.env.secret as string));
                res.status(200);
                res.json(token); 
            }
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`)
        }
    })
    app.get("/users",async(req:express.Request,res:express.Response)=>{
        const data = req.body.token
        try{
            jwt.verify(data,(process.env.secret as string))
        }catch(err){
            res.status(401);
            res.json(`something wrong ${err}`)
            return
        }
        try{
            const allUsers = await userForRoutes.index();
            res.status(200);
            res.json(allUsers)
        }catch(err){
            res.status(500);
            res.json(err)
        }
    })
    app.get("/user",async(req:express.Request,res:express.Response)=>{
        const data =req.body.token;
        {
            try{
                jwt.verify(data,(process.env.secret as string))
            }catch(err){
                res.status(401);
                res.json(`something wrong ${err}`)
                return
            }
            try{
                const userData = jwt.decode(data);
                if(userData == null){
                    res.status(400);
                    res.json("something wrong")
                }else{
                    const stringData = userData as jwt.JwtPayload
                    // const dataInJson = JSON.parse(stringData)
                    const OneUser = await userForRoutes.show(stringData.email);
                    res.status(200);
                    res.send(OneUser)
                }
            }catch(err){
                res.status(500);
                res.json(`something wrong ${err}`)
            }
        }
    })
}
