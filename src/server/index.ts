import Express from 'express'

const app = Express()

// Routing

app.get('/', (req, res) => {
    const data = { message: 'pong' }
    res.send(data)
})

app.get('/rest', (req, res) => {
    res.send('GET request')
})
app.post('/rest', (req, res) => {
    res.send('POST request')
})
app.put('/rest', (req, res) => {
    res.send('PUT request')
})
app.delete('/rest', (req, res) => {
    res.send('DELETE request')
})


// boot Express
const port = 8888
const host = 'localhost'
app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`)
})