const { BEARER_TOKEN } = require('../config/config')

module.exports = function (){
  return {
    "Authorization": `Bearer ${BEARER_TOKEN}`,
    "Content-Type": "application/json",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "connection": "keep-alive",
  }
} 