process.on('uncaughtException',(err)=>{
     console.log('err',err)
})
import express from 'express'
import { dbConnection } from './databases/dbConnections.js'
import userRouter from './src/modules/user/user.router.js'
import messageRouter from './src/modules/message/message.router.js'
import { AppError } from './src/utils/AppErr.js'
import { globalErrorMiddleWare } from './src/utils/globalErrMiddleWare.js'
const app = express()
const port = 2000
app.use(express.json())
app.use('/user',userRouter)
app.use('/message',messageRouter)

app.use('*',(req,res,next)=>{
     next(new AppError("invalid Url"+req.originalUrl,404))
})
app.use(globalErrorMiddleWare)
dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

process.on('unhandledRejection',(err)=>{
     console.log('err',err)
})