#!/usr/bin/env node

/**
 * Create jp.md from both.md
 */
const fs = require('fs')
const { join } = require('path')
const separate = require('jesep')

const target = process.argv[2]
if (!target) {
  console.log(`
Usage: build.js <target dir>
`)
  process.exit()
}

build(target)

function build (target) {
  const srcPath = join(target, 'both.md')
  const destPath = join(target, 'jp.md')

  if (!fs.existsSync(srcPath)) {
    console.error(`${srcPath} not found`)
    return
  }
  const text = fs.readFileSync(srcPath).toString()
  const ja = separate(text)
  fs.writeFileSync(destPath, ja)
}
