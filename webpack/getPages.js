const fs = require('fs')
const { join } = require('path')
const path = require('path')
const DIR = '../src/views/src/pages'

function getDirectories(dir){
  let inputs = {}

  fs.readdir(path.resolve(join(__dirname, dir)), (err, directories) => {
    const isFile = new RegExp(/\.[js|jsx]/)
    const isPage = new RegExp(/\.jsx/)

    if(err){
      console.log("There is a new error", err)
      throw new Error("Something went wrong with the 'readdir' function")
    }


    directories.forEach(directory => {
      // If is a file [js|jsx|css]
      if(directory.toLowerCase().match(isFile)){

        if(directory.toLowerCase().match(isPage)) {
          console.log({
            [directory]: `${dir}/${directory}`
          })
          return directory
        } else {
          console.log(`${dir}/${directory}`)
        }

      } else {
        // If it's a folder with more files
        fs.readdir(`${dir}/${directory.toLowerCase()}`, (err, files) => {
          if(err) {
            console.error(err, "Look a error reading the files")
          }

          files.forEach(file => {
            if(file.toLowerCase().match(isPage)) {
              let currInput = {[directory]: `${dir}/${directory}/${file}`}
              Object.assign(inputs, currInput)
              console.log(currInput)
            }
          })
        })
      }

    })
  })

  return inputs
}

getDirectories(DIR)
