import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import dotenv from 'dotenv';
dotenv.config();

import CredentialManager from '../lib/components/credentialmanager'

describe('<CredentialManager/>', () =>{
  it('should have an input box for the host name', () =>{
    const wrapper = shallow(<CredentialManager/>)
    const element = wrapper.find('input').filterWhere(n => n.props().name=="hostname")
    expect(element).to.have.length(1)
  })
  it('should have an input box for the api key', () => {
    const wrapper = shallow(<CredentialManager/>)
    const element = wrapper.find('input').filterWhere(n => n.props().name=="api_key")
    expect(element).to.have.length(1)
  })
  it('should have a save button' , () => {
    const wrapper = shallow(<CredentialManager/>)
    const element = wrapper.find('button').filterWhere(n => n.props().name=="save")
    expect(element).to.have.length(1)
  })
  describe('SaveCredentials', () => {
    const wrapper  = mount(<CredentialManager/>)
    var hostname   = wrapper.find('input').filterWhere(n => n.props().name=="hostname")
    hostname.node.value = process.env.OCTOPUS_SERVER
    var apiKey     = wrapper.find('input').filterWhere(n => n.props().name=="api_key")
    apiKey.node.value = process.env.OCTOPUS_API_KEY
    var saveButton = wrapper.find('button').filterWhere(n => n.props().name=="save")
    it('should set the host name to localStorage when saved')
    it('should set the api key to localStorage when saved')
    it('should set the process.env.OCTOPUS_SERVER when saved')
    it('should set the process.env.OCTOPUS_API_KEY when saved')

  })

  // process.env.OCTOPUS_API_KEY = localStorage.getItem('react-octo-key')
  // process.env.OCTOPUS_SERVER = localStorage.getItem('react-octo-server')
})
