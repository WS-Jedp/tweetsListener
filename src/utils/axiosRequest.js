const axios = require('axios')
const config = require('../config/config')

const axiosRequest = (type, body, endpoint) => {
	return axios({
		// baseUrl: config.ENDPOINT,
		headers: {
			'Content-Type': 'Application/json',
			'Authorization': `Bearer ${process.env.TOKEN}`
		},
		url: endpoint,
		method: type,
		data: body,
		responseType: 'json'
	})
} 

module.exports = axiosRequest
