import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

var api = require('../lib/helpers/octo_api')
var mock_responses = require('./helpers/mock_responses')

import Deployment from '../lib/components/deployment'


describe('<Deployment />', ()=>{
  var sandbox = sinon.sandbox.create()
  before( () => {

  })
  afterEach( ()=>{
    sandbox.restore()
  })
  it('has a data objoect containing the deployment date', (done)=>{
    sandbox.stub(api, 'get_release').resolves(mock_responses.mock_response(mock_responses.release_response.Items[0]))
    const wrapper = mount(<Deployment
      data={mock_responses.deployment_response.Items[0]}
    />)
    setImmediate(()=>{
      expect(wrapper.props().data.Created).to.equal("2017-07-06T09:11:03.399+00:00")
      done()
    })
  })
  it('gets a release object with a version number in state', (done)=>{
    sandbox.stub(api, 'get_release').resolves(mock_responses.mock_response(mock_responses.release_response.Items[0]))
    const wrapper = mount(<Deployment
      data={mock_responses.deployment_response.Items[0]}
    />)
    setImmediate(()=>{
      expect(wrapper.state().release_data.Id).to.equal("Releases-252")
      done()

    })

  })
})
