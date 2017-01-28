#!/usr/bin/env node
/**
 * build ja.md
 */
const fs = require('fs')
const { join } = require('path')

process.chdir(join(__dirname, '..'))

let dirs = fs.readdirSync('src')
for (let dir of dirs) {
  let srcPath = `src/${dir}/both.md`
  let jaPath = `src/${dir}/jp.md`

  let text = fs.readFileSync(srcPath).toString()
  // Split by '-e-' and '-j-'
  let texts = text.split(/-[ej]-/)
  if (texts.length < 3) {
    continue
  }
  let jaList = []
  texts.forEach((t, i) => {
    if (i % 2 === 0) {
      jaList.push(t.trim())
    }
  })
  let ja = jaList.join('\n\n')
  fs.writeFileSync(jaPath, ja)
}
