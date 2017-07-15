import React, {PropTypes} from 'react'
var api = require('../helpers/octo_api')
import utils from '../utils/utils'

class Deployment extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      release_data: {},
      task_data: {}
    }
  }
  componentDidMount(){
    this.get_release_details()
    this.get_task_details()
  }
  get_release_details(){
    api.get_release(this.props.data.ReleaseId)
    .then(response => {
      this.setState({release_data: response.body})
    })
  }
  get_task_details(){
    api.get_task(this.props.data.TaskId)
    .then(response => {
      this.setState({task_data: response.body})
    })
  }

  get_status_glyph(){
    return (
      this.state.task_data.FinishedSuccessfully ? "glyphicon-ok" : "glyphicon-remove"
    )
  }
  get_btn_status_color(){
    if(!this.state.task_data)
      return "btn-default"
    else
      return this.state.task_data.FinishedSuccessfully ? "btn-success" : "btn-danger"
  }

  render(){
    return(
      <div className="deployment row">
        <a className={"btn " + this.get_btn_status_color() + " btn-lg disabled"}
          style={{width:"90%"}}>
          <span className={"glyphicon " + this.get_status_glyph() + " pull-left"}/>
          <span>
            {this.state.release_data.Version}
          </span>
        </a>
      </div>
    )
  }

}


export default Deployment
