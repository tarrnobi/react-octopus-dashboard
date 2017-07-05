import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import dotenv from 'dotenv';
dotenv.config();

var rp = require('request-promise')
var mock_responses = require('./helpers/mock_responses')
var api = require('../lib/helpers/octo_api')

import Tenant from '../lib/components/tenant'
describe('<Tenant />', () => {
  it('should have a label for the tenant name', () =>{
    const wrapper = shallow(<Tenant data={mock_responses.tenant_response[0]}
                              projects={mock_responses.project_response}
                              environments={mock_responses.environment_response}/>)
    const element = wrapper.find('span.tenant_name')
    expect(element).to.have.length(1)
  })
  it('should have a project label for each project it belongs to', () =>{
    const wrapper = shallow(<Tenant data={mock_responses.tenant_response[0]}
                              projects={mock_responses.project_response}
                              environments={mock_responses.environment_response}/>)
    const element = wrapper.find('td.project_name')
    expect(element).to.have.length(3)
  })
  it('should render the correct number of project_environments', () => {
    const wrapper = shallow(<Tenant data={mock_responses.tenant_response[0]}
                              projects={mock_responses.project_response}
                              environments={mock_responses.environment_response}/>)
    const elements = wrapper.find('td.project_environment')
    expect(elements).to.have.length(3)
  })

})
