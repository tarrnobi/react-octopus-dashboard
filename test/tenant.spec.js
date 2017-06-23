import React from 'react'
import {mount,  shallow} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import dotenv from 'dotenv';
dotenv.config();

var rp = require('request-promise')
var mock_responses = require('./helpers/mock_responses')
var api = require('../lib/helpers/octo_api')

import ProjectGroup from '../lib/components/tenant'

describe('<Tenant />', () => {
  it('should have a label for the tenant name')
  it('should have a project component for each project it belongs to')
  it('should pass the project through as a prop to the component')
  it('should pass the list of project environments to the project')
})
