const redis = require('redis')
const { REDIS_HOST } = require('../../config/config')

class RedisClient {
  key = ''
  client = null
  connection = false;

  constructor(key){
    this.client = redis.createClient({
      host: REDIS_HOST
    })
    this.key = key
    this.connect()
  }

  connect(){
    if(!this.connection) {
      this.client.on('connect', () => {
        this.connection = true
      })

      return this.connection
    }

    return this.connection
  }

  getItems(){
    this.connect()
    const response = this.client.get(this.key, (err, reply) => {
      if(err) {
        console.error(err)
        return err
      }
      return reply
    })

    return response
  }

  getList(res) {
    this.connect()
    const response = this.client.lrange(this.key,0,-1, (err, reply) => {
      if(err){
        console.log(err)
        return err
      }

      res.json(reply)
    })
  }

  setItem(item) {
    this.connect()
    const response = this.client.set(this.key, JSON.stringify(item), (err, reply) => {
      if(err) {
        console.error(err)
        return err
      }
      return reply
    })

    return response
  }

  pushItem(item) {
    this.connect()
    const items = this.client.lpush([this.key, JSON.stringify(item)], (err, reply) => {
      if(err) {
        console.error(err)
        return err
      }

      return reply
    })
    return items;
  }

}

module.exports = {
  RedisClient
}
