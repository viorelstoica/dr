import { getFile, o, outputProcessedStats } from './read.js'

async function test1() {
    var data = await getFile('file')
    console.log(data)
}

async function test2() {
    const data = await outputProcessedStats()
    data.forEach(d => {
        if(d.error > 0)
            console.log(d)
    })
}

async function test3() {
    const ret = await o()
    console.log(ret)
}

test2()