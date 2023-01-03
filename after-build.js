const fs = require('fs')
const path = require('path')

let dataStr = fs.readFileSync(path.join(__dirname, 'dist', 'index.js')).toString()

fs.writeFileSync(
    path.join(__dirname, 'dist', 'index.js'),
    dataStr.replaceAll("new Buffer(","new Buffer.from("),
    {flag: 'w'}
)

console.log("\n- 完成 'new Buffer()' -> 'new Buffer.from()'")
