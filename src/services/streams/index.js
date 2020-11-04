const { postFetchRequest, fetchRequest } = require('../../utils/fetchRequests')
const { ENDPOINT_RULES } = require('../../config/config')

const getStreamsRules = async function() {
    const data = await fetchRequest(ENDPOINT_RULES)
    const resp = await data.json()      
    return resp    
}

const postStreamRules = async function(body) {
  const data = await postFetchRequest(body, ENDPOINT_RULES)
  const resp = await data.json()
  return resp
}

const deleteStreamRules = async function(body) {
  const data = await postFetchRequest(body, ENDPOINT_RULES)
  const resp = await data.json()
  return resp
}

module.exports = {
  getStreamsRules,
  postStreamRules,
  deleteStreamRules
}
