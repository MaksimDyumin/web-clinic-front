var fs = require('fs')
// import { readFileSync } from 'node:fs';
const readJson = () => {
  const json = fs.readFileSync('./prices.json', 'utf8')
  const obj = JSON.parse(json)
  return obj
}

module.export = {readJson}

