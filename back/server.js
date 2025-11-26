import express from 'express';
import { getFile } from './read.js';
import cors from 'cors'

const app = express();
app.use(cors())

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.get('/', async (req, res, next) => {
    res.status(200).send('Hello world')
})

app.get('/file/:file', async (req, res, next) => {
    const file = req.params.file
    var data = await getFile(file)
    res.status(200).send(data)
})

const port = process.env.PORT || 3000
const server = app.listen(port, async () => {
    console.log(`server started on port: ${port}`)
})