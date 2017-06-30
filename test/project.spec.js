import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import Project from '../lib/components/project'
var mock_responses = require('./helpers/mock_responses')

describe('<Project />', () => {
  const project_data = mock_responses.project_response[0]
  const project_environments = mock_responses.environment_response.map(n => n.Id)
  const wrapper = shallow(<Project key={project_data.Id}
                            data={project_data}
                            project_environments={project_environments}/>)
  it('should have a label for the project name', () =>{
    const element = wrapper.find('span.project_name')
    expect(element).to.have.length(1)
  })
  it('should have a div component for each environment', () => {
    const element = wrapper.find('div.project_environment')
    expect(element).to.have.length(5)
  })
  it('should contain the latest release for the specific tenant/project/environment')
})
