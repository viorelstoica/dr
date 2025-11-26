import { getFile, o, outputProcessedStats, outputProcessedStats2 } from './read.js'

async function test1() {
    var data = await getFile('file')
    console.log(data)
}

async function test2() {
    const data = await outputProcessedStats2()
    console.log(data)
}

async function test3() {
    const ret = await o()
    console.log(ret)
}

test2()