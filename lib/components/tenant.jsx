import React, {PropTypes} from 'react'

class Tenant extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <tbody>
        {
          this.props.projects?
            this.props.projects.map(row=>{
              var project_environments = this.props.data.ProjectEnvironments[row.Id]

              return (
                <tr>
                  {
                    this.props.projects[0].Id == row.Id &&
                    <td rowSpan={this.props.projects.length}>
                      <span className="tenant_name">{this.props.data.Name}</span>
                    </td>
                  }
                  <td className="project_name">{row.Name}</td>
                  {
                    /*
                      Create a Column for Each Environment Present in
                      project_environments. Match it to the right cell position
                      based on the sort order
                    */
                    this.props.environments.map(environment =>{

                      return (
                        project_environments && project_environments.includes(environment.Id) ?
                          <td className="project_environment"></td>:<td></td>

                      )
                    })
                 }
                </tr>
              )
            }) : <tr><td><span>Nothing to Display</span></td></tr>

        }
    </tbody>
    )
  }
}


Tenant.propTypes = {
  data:     PropTypes.object,
  projects: PropTypes.array
}

export default Tenant
