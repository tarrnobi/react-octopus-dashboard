import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import Environment from '../lib/components/Environment'

describe('<Environment />', () => {
  it('should have a label displaying the environment name', () =>{
    const wrapper = shallow(<Environment/>)
    const element = wrapper.find('span.environment_name')
    expect(element).to.have.length(1)
  })
})
