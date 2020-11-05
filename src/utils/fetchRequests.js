const fetch = require('node-fetch')
const setHeaders = require('./setHeaders')

const { BEARER_TOKEN } = require('../config/config')


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

const fetchStreamRequest = (endpoint) => {
	return fetch(endpoint, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${BEARER_TOKEN}`,
			'Cookie': 'personalization_id="v1_Ex5Vbk3C8pfATrs4hM7S+g=="; guest_id=v1%3A160416429460269566'
		}
	})
}

module.exports = {
	fetchRequest,
	postFetchRequest,
	fetchStreamRequest
}
