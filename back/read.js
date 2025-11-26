import * as fs from 'fs'
import * as xml2json from 'xml2json'

export function getFile(file) {
  return new Promise((resolve) => {
    fs.readFile('../data/tti/batch/20251022_161103_070_45_msgin_BatchCsdThirdPartyInsider_00c9a029-19d9-40f0-9a75-dce4c905c8e0.xml', 'utf8', function (err, data) {
      var json = xml2json.toJson(data, { "object": true });
      resolve(json)
    })
  })
}

