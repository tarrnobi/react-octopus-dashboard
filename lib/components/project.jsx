import React, {PropTypes} from 'react'

class Project extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="project_row row">
        <div className="col col-xs-1">
          <span className="project_name">{this.props.data.Name}</span>
        </div>
        {
          this.props.project_environments.map(row => {
            return(
              <div className="project_environment">
                <span>Release#</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Project
