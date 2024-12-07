// require('dotenv').config() // old way 
 
import dotenv from "dotenv"
import DbConnection from "./db/db.js";

dotenv.config()
DbConnection()
// firts approtch
/*
import express  from "express"
const app = express()
// connecting db 

; (async function connectDb() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DbName}`)
        app.on("error",(error)=>{
            console.log( error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`${PORT} is listning | server is ready `);
            
        })
    } catch (error) {
        console.error(Error, "<= error");
        throw error

    }
})();
*/

