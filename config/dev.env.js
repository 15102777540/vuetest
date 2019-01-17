'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8001"',
  API_HOST: "/api/",
  APP_ORIGIN: '"http://localhost:8001"'
})
