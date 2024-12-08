import dotenv from 'dotenv'
import Db_COnnection from './db/db.js'
dotenv.config({path:'./env'})

Db_COnnection()





















// first apoch 

    // ; (async function Db_Connection() {
    //     try {
    //         await mongoose.connect(`${process.env.MONGODB_URI_URL}/${DB_Name}`)
    //         // await mongoose.connect(`${process.env.MONGODB_URI_URL}/ ${DB_Name}`)
    //         // await mongoose.connect('mongodb+srv://satish:1234567890@cluster0.ntl48.mongodb.net/youtube')
    //         App.on('error', (error) => {
    //             console.log('express not able to talk database !! ', error);
    //             throw error
    //         })

    //         App.listen(process.env.PORT, () => {
    //             console.log(` Server is Running | App is listning on ${process.env.PORT}`);
    //             // console.log(`${process.env.MONGODB_URI_URL} / ${DB_Name}`);

    //         })
    //     } catch (error) {
    //         console.error(error)
    //         throw error
    //     }
    // })();