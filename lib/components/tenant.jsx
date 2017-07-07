import React, {PropTypes} from 'react'
import Deployment from './deployment'
class Tenant extends React.Component{
  constructor(props){
    super(props)
  }
  //For a give environment, project, tenant;
  //  - Check if a deployment object exists and render
  //    a deployment component if it does.
  //  = Otherwise render an empty table cell
  render_deployment_cell(environment_id, project_id, tenant_id){
    var deployment = this.props.deployments && this.props.deployments.filter(d=>{
      // console.log("(d,p) -env:({0},{1}) -proj:({2},{3}) -ten:({4},{5})".format(d.EnvironmentId, environment_id, d.ProjectId, project_id, d.TenantId , tenant_id))
      return d.EnvironmentId === environment_id &&
              d.ProjectId === project_id &&
              d.TenantId === tenant_id
    })[0]
    var key = "{0}-{1}-{2}".format(environment_id, project_id, tenant_id)
    return (
      <td className={key}>
        {
          deployment &&
          <Deployment
            data={deployment} />
        }
      </td>
    )
    if(this.props.deployments){
      return(<td className="project_environment">Deploy!</td>)
    }
    else{
      return(<td className="project_environment"></td>)
    }
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
                        // project_environments && project_environments.includes(environment.Id)
                        this.render_deployment_cell(environment.Id, row.Id, this.props.data.Id)
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
