import * as fs from 'fs'
import * as readline from 'readline'
import { setDefaultHighWaterMark } from 'stream'
import * as xml2json from 'xml2json'

export function getFile(file) {
  return new Promise((resolve) => {
    fs.readFile('../data/tti/batch/20251022_161103_070_45_msgin_BatchCsdThirdPartyInsider_00c9a029-19d9-40f0-9a75-dce4c905c8e0.xml', 'utf8', function (err, data) {
      var json = xml2json.toJson(data, { "object": true });
      resolve(json)
    })
  })
}

export async function outputProcessedStats() {
  const promises = []
  var folders = fs.readdirSync('../data/static/output_processed')
  folders.forEach(async (fo) => {
    var files = fs.readdirSync(`../data/static/output_processed/${fo}`)
    files.forEach(fi => {
      promises.push(scanSucErr(fo, fi))
    })
  })
  const ret = await Promise.all(promises)
  return ret
}

function scanSucErr(fo, fi) {
  const fileName = `../data/static/output_processed/${fo}/${fi}`
  return new Promise((resolve) => {
    var cnt = 0, suc = 0, err = 0
    var lineReader = readline.createInterface({
      input: fs.createReadStream(fileName)
    });

    lineReader.on('line', function (line) {
      cnt = cnt + 1
      if (line.startsWith("SUC"))
        suc = suc + 1
      if (line.startsWith("ERR"))
        err = err + 1
    });

    lineReader.on('close', function () {
      resolve({ folder: fo, file: fi, cnt: cnt, suc: suc, err: err })
    });
  })
}



export async function outputProcessedStats2() {
  const promises = []
  var folders = fs.readdirSync('../data/static/output_processed')
  folders.forEach(async (fo) => {
    var files = fs.readdirSync(`../data/static/output_processed/${fo}`)
    files.forEach(fi => {
      promises.push(scanCmdSucErr(fo, fi))
    })
  })
  const ret = await Promise.all(promises)
  var ret2 = []
  ret.forEach(p => {
    p.forEach(r => {
      var elm = ret2.find(v => v.cmd === r.cmd)
      if (elm != undefined) {
        elm.suc = elm.suc + r.suc
        elm.err = elm.err + r.err
      }
      else {
        ret2.push(r)
      }
    })
  })
  return ret2
}

function scanCmdSucErr(fo, fi) {
  const fileName = `../data/static/output_processed/${fo}/${fi}`
  return new Promise((resolve) => {
    var ret = []
    var currRet
    var lineReader = readline.createInterface({
      input: fs.createReadStream(fileName)
    });

    lineReader.on('line', function (line) {
      if (line.startsWith("CMD")) {
        currRet = ret.find((el) => el.cmd === line.substring(4))
        if (currRet == undefined) {
          currRet = ret[ret.push({ cmd: line.substring(4), suc: 0, err: 0 }) - 1]
        }
      }
      if (line.startsWith("SUC"))
        currRet.suc = currRet.suc + 1
      if (line.startsWith("ERR"))
        currRet.err = currRet.err + 1
    });

    lineReader.on('close', function () {
      resolve(ret)
    });
  })
}



function onP(m, tm) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(m)
      resolve(1)
    }, tm)
  })
}



async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}



export async function o() {
  const ret = await Promise.all([
    scanSingleFile('../data/static/output_processed/ACCOUNT/20251022_192947_00007_Fi-Batch-cashAccount1007000500055127x47x0x1761154186144.output'),
    scanSingleFile('../data/static/output_processed/ACCOUNT/20251022_192947_00006_Fi-Batch-cashAccount1007000500032053x47x0x1761154185454.output')
  ])
  return ret
}


