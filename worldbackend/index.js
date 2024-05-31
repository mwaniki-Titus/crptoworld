import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'


import userRouter from './src/routes/userRoutes.js'
import transactionRouter from './src/routes/transactionRoutes.js'
import paymentRouter from './src/routes/paymentRoutes.js'
import grantRouter from './src/routes/grantsRoutes.js'
import referralRouter from './src/routes/referalRoutes.js'


dotenv.config()

const app=express() 
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
}
const PORT=process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors(corsOptions));

app.use('/api',userRouter)
app.use('/api', transactionRouter)
app.use('/api', paymentRouter)
app.use('/api', grantRouter)
app.use('/api', referralRouter)


app.listen(PORT,()=>{
    console.log(`This app is running on port ${PORT}`);
})