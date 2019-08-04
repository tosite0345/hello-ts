import Express from 'express'
import {Ping} from '../types/api'
import cors from 'cors'

const app = Express()
app.use(cors())

// Routing

app.get('/', (req, res) => {
    const data: Ping = {message: 'pong'}
    res.send(data)
})

app.use((req, res, next) => {
    res.sendStatus(404)
    next({statusCode: 404})
})

app.use((
    err: { statusCode: number },
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
) => {
    console.log(err.statusCode)
})

// boot Express
const port = 8888
const host = 'localhost'
app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`)
})