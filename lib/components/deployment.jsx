import React, {PropTypes} from 'react'
var api = require('../helpers/octo_api')
import utils from '../utils/utils'

class Deployment extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      release_data: {}
    }
  }
  componentDidMount(){
    this.get_release_details()
  }
  get_release_details(){
    api.get_release(this.props.data.ReleaseId)
    .then(response => {
      this.setState({release_data: response.body})
    })
  }
  render(){
    return(
      <div className="deployment">
        <span>{this.state.release_data.Version}</span>
      </div>
    )
  }

}


export default Deployment
