import express from 'express'
import { dbConnection } from './databases/dbConnections.js'
import userRouter from './src/modules/user/user.router.js'
const app = express()
const port = 2000
app.use(express.json())
app.use('/user',userRouter)
dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))