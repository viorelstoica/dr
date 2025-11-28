import { getFile, o, outputProcessedStats, outputProcessedStats2, outputProcessedStats3, ttiStats } from './read.js'

async function test0() {
    var data = await getFile('file')
    console.log(data)
}

async function test1() {
    const data = await outputProcessedStats()
    console.log(data)
}

async function test2() {
    const data = await outputProcessedStats3(process.argv[2])
    console.log(data)
}

async function test3() {
    const ret = await ttiStats('2025-11-25')
    console.log(ret)
}

test3()