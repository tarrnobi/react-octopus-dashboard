import {expect} from 'chai'
import dotenv from 'dotenv'
import sinon from 'sinon'
import utils from '../lib/utils/utils'
// dotenv.load()
var api = require('../lib/helpers/octo_api')
var rp = require('request-promise')

var mock_responses = require('./helpers/mock_responses')


describe('helpers/octo_api', () => {
  var sandbox = sinon.sandbox.create()
  afterEach(() => {
    sandbox.restore()
    dotenv.load()
  })
  describe('make_api_call', () => {
    it('should return an error message if the API Key is not set', ()=>{
      var parameters = {}
      delete process.env.OCTOPUS_API_KEY
      expect(() => api.make_api_call('', 'get', parameters)).to.throw('Ensure that OCTOPUS_API_KEY environment variable is set.')
    })

    it('should return an error message if the host name is not set', () =>{
      var parameters = {}
      delete process.env.OCTOPUS_SERVER
      expect(() => api.make_api_call('','get', parameters)).to.throw('Ensure that OCTOPUS_SERVER environment variable is set.')
    })

    // it('should return a list of project groups when given the projectgroups/all endpoint', ()=>{
    //   var endpoint   = 'projectgroups/all'
    //   var method     = 'get'
    //   var parameters = {}
    //
    //   return api.make_api_call(endpoint, method, parameters).then( response=>{
    //     expect(response.body).to.not.equal(0)
    //   })
    // })
  })

  describe('get_project_groups',() =>{
    it('should return a list of project groups', () => {
      const json_response = mock_responses.mock_response(mock_responses.project_group_response)
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_project_groups()
      .then(response => {
        expect(response.body.length).to.equal(3)
      })
    })
  })

  describe('get_project_group',() => {
    it('should return a single project entry when given the project_id',()=>{
      const json_response   = mock_responses.mock_response(mock_responses.project_group_response[0])
      var project_group_id  = json_response.body.Id
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_project_group(project_group_id)
      .then(response => {
        expect(response.body.Id).to.equal(project_group_id)
      })
    })
  })

  describe('get_projects', () => {
    it('should return a list of all projects', ()=>{
      const json_response = mock_responses.mock_response(mock_responses.project_response)
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_projects()
      .then(response => {
        expect(response.body.length).to.equal(3)
      })
    })
  })

  describe('get_project', () =>{
    it('should return an error message if the given project_id does not exist', () =>{
      var   project_id    = 'Projects-00'
      const json_response = mock_responses.mock_fail_response(project_id)
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_project(project_id=project_id)
      .catch(response => {
        expect(response).to.equal("The resource 'Projects-00' was not found")
      })

    })

    it('should return a single project given a project_id', () =>{
      const json_response = mock_responses.mock_response(mock_responses.project_response[0])
      var project_id      = json_response.Id
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_project(project_id = project_id)
      .then(response => {
        expect(response.body.Name).to.equal('DEV_Project_1')
      })
    })
  })

  describe('get_tenants', () => {
    it('should return a list of all tenants', () => {
      const json_response = mock_responses.mock_response(mock_responses.tenant_response)
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_tenants()
      .then(response => {
        expect(response.body.length).to.equal(2);
      })
    })
  })
  describe('get_tenant', () =>{
    it('should throw an error message if the given tenant_id does not exist', () => {
      var   tenant_id     = 'Tenants-00'
      const json_response = mock_responses.mock_fail_response(tenant_id)
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_tenant(tenant_id = tenant_id)
      .catch(response => {
        expect(response).to.equal("The resource 'Tenants-00' was not found")

      })

    })
    it('should return a single tenant given the tenant_id', () => {
      const json_response = mock_responses.mock_response(mock_responses.tenant_response[0])
      var   tenant_id     = json_response.Id
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_tenant(tenant_id = tenant_id)
      .then(response => {
        expect(response.body.Name).to.equal("Brendan")
      })
    })
  })

  describe('get_environments', () => {
    it('should return a list of all environments', () => {
      const json_response = mock_responses.mock_response(mock_responses.environment_response)
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_environments()
      .then(response => {
        expect(response.body.length).to.equal(5)
      })
    })
  })

  describe('get_environment', () => {
    it('should throw an error message if the given environment does not exist', () => {
      var   environment_id = 'Environments-00'
      const json_response = mock_responses.mock_fail_response(environment_id)
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_environment()
      .catch(response => {
        expect(response).to.equal("The resource 'Environments-00' was not found")

      })
    })
    it('should return a single tenant given the tenant id', () => {
      const json_response = mock_responses.mock_response(mock_responses.environment_response[0])
      var environment_id = json_response.Id
      sandbox.stub(rp, 'get').resolves(json_response)

      return api.get_environment(environment_id = environment_id)
      .then(response => {
        expect(response.body.Name).to.equal("Local_DEV")
      })
    })
  })
})
