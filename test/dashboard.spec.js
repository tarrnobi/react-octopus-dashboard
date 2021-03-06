import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import dotenv from 'dotenv';
dotenv.config();

var rp = require('request-promise')
var mock_responses = require('./helpers/mock_responses')
var api = require('../lib/helpers/octo_api')

import Dashboard from '../lib/components/dashboard'
import ProjectGroup from '../lib/components/projectgroup'
import Environment from '../lib/components/environment'

describe('<Dashboard/>',() =>{
  var sandbox = sinon.sandbox.create()
  after(() => {
    sandbox.restore()
  })

  before(() =>{
    sandbox.stub(api, 'get_project_groups').resolves(mock_responses.mock_response(mock_responses.project_group_response))
    sandbox.stub(api, 'get_projects').resolves(mock_responses.mock_response(mock_responses.project_response))
    sandbox.stub(api, 'get_tenants').resolves(mock_responses.mock_response(mock_responses.tenant_response))
    sandbox.stub(api, 'get_deployments').resolves(mock_responses.mock_response(mock_responses.deployment_response))
    sandbox.stub(api, 'get_environments').resolves(mock_responses.mock_response(mock_responses.environment_response))
  })
  describe('Dashboard/Features', () =>{
    it('should call get_project_groups on initial load', () =>{
      sandbox.spy(Dashboard.prototype, 'get_project_groups')
      const wrapper = mount(<Dashboard />)
      expect(api.get_project_groups.called).to.be.true
    })
    it('should have project groups in state', (done) => {
      const wrapper = mount(<Dashboard />)
      setImmediate(() => {
        expect(wrapper.state().project_groups.length).to.equal(3)
        done()
      })
    })
    it('should call get_projects on initial load', () =>{
      sandbox.spy(Dashboard.prototype, 'get_projects')
      const wrapper = mount(<Dashboard />)
      expect(api.get_projects.called).to.be.true
    })
    it('should have projects in state', (done)=>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        expect(wrapper.state().projects).to.have.length(3)
        done()
      })
    })
    it('should call get_tenants on initial load', () =>{
      sandbox.spy(Dashboard.prototype, 'get_tenants')
      const wrapper = mount(<Dashboard/>)
      expect(api.get_tenants.called).to.be.true
    })
    it('should have tenants in state', (done)=>{
      const wrapper = mount(<Dashboard/>)
      setImmediate(() =>{
        expect(wrapper.state().tenants).to.have.length(2)
        done()
      })
    })
    it('should call get_deployments on initial load', () =>{
      sandbox.spy(Dashboard.prototype, 'get_deployments')
      const wrapper = mount(<Dashboard />)
      expect(api.get_deployments.called).to.be.true
    })
    it('should have deployments in state', (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        expect(wrapper.state().deployments).to.have.length(3)
        done()
      })
    })

  })

  describe('Dashboard/ProjectGroup', () => {
    it('should have project group components', (done) => {
      const wrapper = mount(<Dashboard />)
      setImmediate(() => {
        expect(wrapper.find(ProjectGroup).length).to.equal(2)
        done()
      })
    })
    it('should create project group components that have a name prop', (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        expect(wrapper.find(ProjectGroup).first().props().name).to.equal('Group 1')
        done()
      })
    })
    it('should create project group components that have their key set to the project group id' , (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        expect(wrapper.find(ProjectGroup).first().key()).to.equal('ProjectGroups-23')
        done()
      })
    })
    it('should create a project group component with a list of projects that belong to it as a prop', (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        const element = wrapper.find(ProjectGroup).filterWhere(n => n.key() == "ProjectGroups-23")
        expect(element.props().projects.length).to.equal(1)
        done()
      })
    })
    it('should create a project group component with a list of tenants that belong to it as a prop', (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        const element = wrapper.find(ProjectGroup).filterWhere(n => n.key() == "ProjectGroups-23")
        expect(element.props().tenants).to.have.length(1)
        done()
      })
    })
  })
  describe('Dashboard/Environment', () =>{
    it('should have environment components as per data returned', (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        const element = wrapper.find(ProjectGroup).first()
        expect(element.find(Environment)).to.have.length(5)
        done()
      })
    })
    it('should create environments with the names given', (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        expect(wrapper.find(Environment).first().props().name).to.equal('Local_DEV')
        done()
      })
    })
    it('should set the key of the environment to the id of the environment', (done) =>{
      const wrapper = mount(<Dashboard />)
      setImmediate(()=>{
        expect(wrapper.find(Environment).first().key()).to.equal('Environments-1')
        done()
      })
    })
  })
  describe('Dashboard/Tenant', () =>{

  })
})
