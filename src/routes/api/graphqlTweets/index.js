const { readFileSync } = require('fs')
const { join } = require('path')

const express = require('express')
const { Resolvers } = require('../../../lib/graphql/resolvers')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')

const typeDefs = readFileSync(join(__dirname, '../../../', 'lib', 'graphql', 'schema.graphql'), 'utf-8')
const Schema = makeExecutableSchema({
  typeDefs,
  resolvers: Resolvers
})

const GraphqlTweets = (app) => {
  app.use('/api/graphql',graphqlHTTP({
    schema: Schema,
    graphiql: true
  }))
}

module.exports = GraphqlTweets
