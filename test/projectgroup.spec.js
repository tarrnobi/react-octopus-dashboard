import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import dotenv from 'dotenv';
dotenv.config();

var rp = require('request-promise')
var mock_responses = require('./helpers/mock_responses')
var api = require('../lib/helpers/octo_api')

import ProjectGroup from '../lib/components/projectgroup'
import Tenant       from '../lib/components/tenant'
//import Project from '../lib/components/project'

describe('<ProjectGroup />', () => {
  var sandbox = sinon.sandbox.create()
  const wrapper = shallow(<ProjectGroup
    tenants={mock_responses.tenant_response}
    environments={mock_responses.environment_response}
    projects={mock_responses.project_response}/>)
  afterEach(() => {
    sandbox.restore()
  })
  it('should have a label for the project group', () =>{
    const element = wrapper.find('span.project_group_name')
    expect(element).to.have.length(1)
  })
  it('should contain sections for tenants', () => {
    const element = wrapper.find(Tenant).first()
    expect(element.props().data.Name).to.equal('Brendan')
  })
})
