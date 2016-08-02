/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-request
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var Promise = require('bluebird')
var request = require('request')
/**
 *
 * @module index
 */

exports.options = {
  defaultBaseUrl: false
}

exports.metadata = {
  name: 'Request',
  type: 'factory',
  param: 'Request'
}

exports.plugin = {
  load: function(inject, loaded) {
    loaded(null, builder)
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
}

function builder(){
  return function buildRequest(optionsArg){
    if(optionsArg){
      return Promise.promisifyAll(
        request.defaults(optionsArg)
      , { multiArgs: true })
    }
    return Promise.promisifyAll(request, {multiArgs: true})
  }
}