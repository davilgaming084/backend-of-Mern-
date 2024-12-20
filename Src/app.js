import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: '20kb' })) // for form word limit 
app.use(express.urlencoded({ extended: true, limit: "20kb" })) // for url premps 
app.use(express.static('Public'))

// coockie configration
app.use(cookieParser())


// Routes 
import userRoute from '../Src/routes/user.route.js'
// route decleration 
app.use('/api/v1/users',userRoute)
export default app