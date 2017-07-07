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
import Deployment from '../lib/components/deployment'
describe('<Tenant />', () => {
  it('should have a label for the tenant name', () =>{
    const wrapper = shallow(<Tenant data={mock_responses.tenant_response[0]}
                              projects={mock_responses.project_response}
                              environments={mock_responses.environment_response}
                              deployments={mock_responses.deployment_response.Items}/>)
    const element = wrapper.find('span.tenant_name')
    expect(element).to.have.length(1)
  })
  it('should have a project label for each project it belongs to', () =>{
    const wrapper = shallow(<Tenant data={mock_responses.tenant_response[0]}
                              projects={mock_responses.project_response}
                              environments={mock_responses.environment_response}
                              deployments={mock_responses.deployment_response.Items}/>)
    const element = wrapper.find('td.project_name')
    expect(element).to.have.length(3)
  })
  it('should render the correct number of project_environments', () => {
    const wrapper = shallow(<Tenant data={mock_responses.tenant_response[0]}
                              projects={mock_responses.project_response}
                              environments={mock_responses.environment_response}
                              deployments={mock_responses.deployment_response.Items}/>)
    const elements = wrapper.find('td.Environments-2-Projects-45-Tenants-21')
    expect(elements).to.have.length(1)
  })

  it('should render a deployment component given the correct environment, project and tenant', () =>{
    //Tenants-21
    //Projects-45
    //Environments-2
    const wrapper = shallow(<Tenant data={mock_responses.tenant_response[0]}
                              projects={mock_responses.project_response}
                              environments={mock_responses.environment_response}
                              deployments={mock_responses.deployment_response.Items}/>)
    const elements = wrapper.find('td.Environments-2-Projects-45-Tenants-21').first()
    expect(elements.find(Deployment)).to.exist

  })

})
