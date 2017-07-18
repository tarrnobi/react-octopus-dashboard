import React,  {PropTypes} from 'react'
var api = require('../helpers/octo_api')
import utils from '../utils/utils'

import Tenant from './tenant'
import Environment from './environment'

class ProjectGroup extends React.Component{
  constructor(props){
    super(props)
  }

  render_group_headers(){
    return (
      <tr>
        <th colSpan={2}>
          <span className="project_group_name">
            <strong>{this.props.name}</strong>
          </span>
        </th>
        {
          this.props.environments.map((row) => {
            return (
              <Environment
                key={row.Id}
                name={row.Name} />
              )
            })
          }
        </tr>
    )
  }

  render(){
    return (
      <table className="table">
        <thead>
          {this.render_group_headers()}
        </thead>
        {
          this.props.tenants.map(row => {
            const tenant_projects = this.props.projects.filter(p => {
              return Object.keys(row.ProjectEnvironments).includes(p.Id)
            })
            return (
              <Tenant
                key={"{0}-{1}".format(this.props.Id, row.Id)}
                data={row}
                projects={tenant_projects}
                environments= {this.props.environments}
                deployments={this.props.deployments}/>
              )
            })
        }
      </table>
    )

  }
}



export default ProjectGroup

ProjectGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}
