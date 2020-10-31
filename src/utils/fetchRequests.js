const fetch = require('node-fetch')
const setHeaders = require('./setHeaders')

const fetchRequest = (endpoint) => {
	return fetch(endpoint, {
		method: "GET",
		headers: setHeaders(),
	})
} 

const postFetchRequest = (data, endpoint) => {	
	return fetch(endpoint, {
		method: "POST",
		body: JSON.stringify(data),
		headers: setHeaders()
	})
} 

module.exports = {
	fetchRequest,
	postFetchRequest
}
