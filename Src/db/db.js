import mongoose from "mongoose";
import { DbName } from "../constants.js";


const DbConnection = async () => {
    try {
       const ConnectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI} / ${DbName}`)
       console.log(`\n mongo db connected !! Db Host ${ConnectionInstance.connection.host}`);  // check what return what return after db connection
       
    } catch (error) {
        console.log("error When connection db by mongose", error);
        process.exit(1)

    }
}

export default DbConnection