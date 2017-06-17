import format from '../utils/utils'
var rp = require('request-promise')
var esc = encodeURIComponent
/*
  All Responses Require the API Key to be passed through in the
  heeader as X-Octopus-ApiKey: API-XXXXXXXXXXXXXXXXXXXX

  https://github.com/OctopusDeploy/OctopusDeploy-Api/wiki/ProjectGroups


*/

export function make_api_call(endpoint, method, parameters){
  if (!process.env.OCTOPUS_SERVER) throw 'Ensure that OCTOPUS_SERVER environment variable is set.'
  if (!process.env.OCTOPUS_API_KEY)  throw 'Ensure that OCTOPUS_API_KEY environment variable is set.'
  var url = "{0}/api/{1}".format(process.env.OCTOPUS_SERVER, endpoint)

  var options = {
    url: url,
    qa: parameters,
    headers: {
      'X-Octopus-ApiKey': process.env.OCTOPUS_API_KEY
    },
    json: true,
    resolveWithFullResponse: true,
  }
  return rp.get(options)
  .then(response => {
    if(response.statusCode ===200){
      return response
    }
    else{
      throw response.body.ErrorMessage
    }
  })
  // .catch(err => {
  //   console.log('throwing error')
  //   throw err.message
  // })
}

export function get_project_groups(){
  var endpoint    = "projectgroups/all"
  var method      = "get"
  var parameters  = {}
  return make_api_call(endpoint, method, parameters)
}

export function get_project_group(project_group_id){
  var endpoint    = "projectgroups/{0}".format(project_group_id)
  var method      = "get"
  var parameters  = {}

  return make_api_call(endpoint, method, parameters)
}

export function get_projects(){
  var endpoint = "projects/all"
  var method      = "get"
  var parameters  = {}
  return make_api_call(endpoint, method, parameters)
}

export function get_project(project_id){
  var endpoint    = "projects/{0}".format(project_id)
  var method      = "get"
  var parameters  = {}
  return make_api_call(endpoint, method, parameters)
}

export function get_tenants(){
  var endpoint = "tenants/all"
  var method      = "get"
  var parameters  = {}
  return make_api_call(endpoint, method, parameters)
}

export function get_tenant(tenant_id){
  var endpoint = "tenants/{0}".format(tenant_id)
  var method      = "get"
  var parameters  = {}
  return make_api_call(endpoint, method, parameters)
}

export function get_environments(){
  var endpoint = "environments/all"
  var method      = "get"
  var parameters  = {}
  return make_api_call(endpoint, method, parameters)
}

export function get_environment(environment_id){
  var endpoint = "envrionments/{0}".format(environment_id)
  var method      = "get"
  var parameters  = {}
  return make_api_call(endpoint, method, parameters)
}
