import React, {PropTypes} from 'react'
import Project from './project'

class Tenant extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <tr>
        <td rowSpan={this.props.projects.length}>
          <span className="tenant_name">{this.props.data.Name}</span>
        </td>
        <td>
        {
          this.props.projects ?
          this.props.projects.map(row => {
            var project_environments = this.props.data.ProjectEnvironments[row.Id]

            return (
              <Project key={row.Id}
                data={row}
                project_environments={project_environments}/>
              )
            }) :
            <td>
              <span>Nothing to Display</span>
            </td>

          }
        </td>
      </tr>
    )
  }
}


Tenant.propTypes = {
  data:     PropTypes.object,
  projects: PropTypes.array
}

export default Tenant
