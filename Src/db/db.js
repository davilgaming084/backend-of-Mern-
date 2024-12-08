import mongoose from "mongoose";
import DB_Name from "../constants.js";
async function Db_COnnection() {
    try {
        const ConectionInstance = await mongoose.connect(`${process.env.MONGODB_URI_URL}/${DB_Name}`)
        console.log(`MOngo db Connected !! || db host ${ConectionInstance.connection.host}`);

    } catch (error) {
        console.error("Error", error)
        process.exit(1)
    }
}
export default Db_COnnection;