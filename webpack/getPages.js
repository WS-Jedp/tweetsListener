const fs = require('fs')
const { join } = require('path')
const path = require('path')
const DIR = '../src/views/src/pages'

function getPages(dirname, dir) {
  let inputs = {}
  const directories = fs.readdirSync(path.resolve(join(dirname, dir)))
  
  const isFile = new RegExp(/\.[jsx|js]$/) 
  const isPage = new RegExp(/\.jsx$/)
  
  directories.forEach(directory => {
    if(directory.toLowerCase().match(isFile)) {
  
      if(directory.toLowerCase().match(isPage)){
        let resolvedPath = path.resolve(`${DIR}/${directory}`)
        let currPage = {
          [directory]:  resolvedPath
        }
        Object.assign(inputs, currPage)
      }
  
    } else {
      const files = fs.readdirSync(`${DIR}/${directory}`)
      files.forEach(file => {
        if(file.toLowerCase().match(isPage)) {
          let resolvedPath = path.resolve(`${DIR}/${directory}/${file}`)
          let currPage = {
            [directory]: resolvedPath
          }
          Object.assign(inputs, currPage)
        }
      })
    }
  })

  return inputs
}
const pages = getPages(__dirname, DIR)
console.log(pages)

module.exports = {
  getPages
}
