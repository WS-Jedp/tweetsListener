const axios = require('axios')
const config = require('../config/config')

const axiosRequest = (type, body) => {
	return axios({
		header: {
			'Content-Type': 'Application/json',
			'Authorization': `Bearer ${config.BEARER_TOKEN}`
		},
		url: config.ENDPOINT,
		method: type,
		data: body,
		responseType: 'json'
	})
} 

module.exports = axiosRequest
