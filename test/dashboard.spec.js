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

describe('<Dashboard/>',() =>{
  var sandbox = sinon.sandbox.create()
  afterEach(() => {
    sandbox.restore()
  })
  it('should call get_project_groups on initial load', () =>{
    sandbox.spy(api, 'get_project_groups')
    sandbox.stub(rp, 'get').resolves(mock_responses.mock_response(mock_responses.project_group_response))

    const wrapper = mount(<Dashboard />)

    expect(api.get_project_groups.called).to.be.true
  })
  it('should have project groups in state', (done) => {
    sandbox.stub(rp, 'get').resolves(mock_responses.mock_response(mock_responses.project_group_response))

    const wrapper = mount(<Dashboard />)
    setImmediate(() => {
      expect(wrapper.state().project_groups.length).to.equal(3)
      done();
    })
  })
  it('should have project group components', (done) => {
    sandbox.stub(rp, 'get').resolves(mock_responses.mock_response(mock_responses.project_group_response))
    const wrapper = mount(<Dashboard />)
    setImmediate(() => {
      expect(wrapper.find(ProjectGroup).length).to.equal(3)
      done();
    })
  })
})
