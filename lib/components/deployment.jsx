import React, {PropTypes} from 'react'
var api = require('../helpers/octo_api')
import utils from '../utils/utils'

class Deployment extends React.Component{
  constructor(props){
    super(props)
  }
  get_release_details(){
    api.get
  }
  render(){
    return(
      <p className="deployment">Fill Me In</p>
    )
  }

}


export default Deployment
