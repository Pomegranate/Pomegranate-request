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
  frameworkVersion: 6,
  name: 'Request',
  type: 'factory',
  param: 'Request'
}

exports.plugin = {
  load: function() {
    return builder
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