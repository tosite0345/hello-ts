import Express from 'express'

const app = Express()

// Routing

app.get('/', (req, res) => {
    const data = { message: 'pong' }
    res.send(data)

})

// boot Express

const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`)
})