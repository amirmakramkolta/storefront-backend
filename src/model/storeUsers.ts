import client from "../database";
import dotenv from 'dotenv';
import bycrypt from 'bcrypt';
dotenv.config();

export type userType = {
    firstName:string,
    lastName:string,
    email:string
    hashPassword:string
}
export type userTypeNoPassword = {
    id:number,
    firstName:string,
    lastName:string,
    email:string
}

export class Users{
     async index ():Promise<userTypeNoPassword[]>{
         try{
             const connect = await client.connect();
             const sql = "select store_user_id, first_name, last_name, email from store_user";
             const result = await connect.query(sql);
             connect.release();
             return result.rows;
         }catch(err){
             throw new Error(`something wrong ${err}`);
         }
    }
    async create (u:userType):Promise<userType[]>{
        try{
            const connect = await client.connect();
            const sql = "insert into store_user (first_name, last_name, email, hash_password) values ($1, $2, $3, $4)";
            const hash_password = bycrypt.hashSync(u.hashPassword+process.env.pepper,parseInt(process.env.salt as string));
            const result = await connect.query(sql,[u.firstName,u.lastName,u.email,hash_password]);
            connect.release();
             return result.rows;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async show(email:string):Promise<userTypeNoPassword[]>{
        try{
            const connect = await client.connect();
            const sql = "select store_user_id, first_name, last_name, email from store_user where email = $1";
            const result = await connect.query(sql,[email]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`something wrong ${err}`);
        }
    }
}