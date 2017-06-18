import dotenv from 'dotenv';
dotenv.config();

import React from 'react'
import {render} from 'react-dom'
import Dashboard from './components/dashboard'

render(<Dashboard/>, document.getElementById('root'))
