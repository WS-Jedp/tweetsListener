const { RedisClient } = require('../../redis')
const { getStreamsRules, postStreamRules } = require('../../../services/streams')

const setRulesToDelete = require('../../../utils/setRulesToDelete')
const setStreamRules = require('../../../utils/streamRules')

const Resolvers = {
  Query: {
    getTweets: () => {
      const redis = new RedisClient('Tweets')
      return ["Tweet", "Tweet"]
    },
    getRules: async () => {
      const { data } = await getStreamsRules()
      return data
    }
  },
   Mutation: {
     createRule: async (root, { input }) => {
        const redis = new RedisClient('Tweets')
        const body = setStreamRules()
        const resp = await postStreamRules(body)
        return resp.data
     },
     deleteRule: async (root, { ids }) => {
       const redis = new RedisClient('Tweets')
       const body = setRulesToDelete(ids)
       const resp = await postStreamRules(body)
       return resp.data
     }
   }
}

module.exports = {
  Resolvers
}