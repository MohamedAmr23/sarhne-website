import express from 'express'
import { dbConnection } from './databases/dbConnections.js'
import userRouter from './src/modules/user/user.router.js'
import messageRouter from './src/modules/message/message.router.js'
const app = express()
const port = 2000
app.use(express.json())
app.use('/user',userRouter)
app.use('/message',messageRouter)
dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))