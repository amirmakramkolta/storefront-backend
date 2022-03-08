import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();

let client:Pool

if(process.env.env_node=="dev"){
    client = new Pool({
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    })
}else{
    client = new Pool({
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database_test
    })
}

export default client;