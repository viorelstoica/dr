import express from 'express'
import { getFile, outputProcessedStats } from './read.js'
import cors from 'cors'
import random from 'random-name'

const app = express();
app.use(cors())

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.get('/', async (req, res, next) => {
    res.status(200).send({name: `Hello world!`})
})

app.get('/name', async (req, res, next) => {
    res.status(200).send({firstname: `${random.first()}`, lastname: `${random.last()}`})
})

app.get('/file/:file', async (req, res, next) => {
    const file = req.params.file
    var data = await getFile(file)
    res.status(200).send(data)
})

app.get('/output/stats', async (req, res, next) => {
    const data = await outputProcessedStats()
    var ret = []
    data.forEach(d => {

      const recF = ret.find((el) => el.folder === d.folder)
      if (recF == undefined) {
        ret.push({ folder: d.folder, cnt: d.cnt, err: d.err, suc: d.suc})
      }
      else {
        recF.cnt = recF.cnt + d.cnt
        recF.err = recF.err + d.err
        recF.suc = recF.suc + d.suc
      }
    })
    res.status(200).send(ret)
})

const port = process.env.PORT || 3000
const server = app.listen(port, async () => {
    console.log(`server started on port: ${port}`)
})





