import React,  {PropTypes} from 'react';
var api = require('../helpers/octo_api')
import utils from '../utils/utils'

import ProjectGroup from './projectgroup'
import Environment from './environment'
class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      project_groups: [],
      environments: [],
      projects: [],
      tenants: [],
      deployments:[],
    }
  }

  componentDidMount(){
    this.get_project_groups()
    this.get_environments()
    this.get_projects()
    this.get_tenants()
    this.get_deployments()
  }

  get_project_groups(){
    return api.get_project_groups()
    .then(response => {
      this.setState({project_groups: response.body})
    })
    .catch(response => {
      this.setState({error_message: response})
    })
  }

  get_environments(){
    return api.get_environments()
    .then(response => {
      this.setState({environments: response.body})
    })
    .catch(response => {
      this.setState({error_message: response})
    })
  }
  get_projects(){
    return api.get_projects()
    .then(response => {
      this.setState({projects: response.body})
    })
    .catch(response => {
      this.setState({error_message: response})
    })
  }
  get_tenants(){
    return api.get_tenants()
    .then(response =>{
      this.setState({tenants: response.body})
    }).catch(response => {
      this.setState({error_message: response})
    })
  }
  get_deployments(){
    return api.get_deployments()
    .then(response =>{
      this.setState({deployments: response.body.Items})
    })
    .catch(response=>{
      this.setState({error_message:response})
    })
  }


  render(){
    return(
      <div className="container-fluid">
          {
            this.state.project_groups.map((row) => {

              const group_projects  = this.state.projects.filter(item => item.ProjectGroupId == row.Id)
              var project_tenants   = this.state.tenants.filter(tenant => {
                return Object.keys(tenant.ProjectEnvironments).some(project=>{
                   return group_projects.filter(n => n.Id == project).length
                 })
              })
              if(project_tenants.length > 0){
                return (
                  <ProjectGroup
                    key={row.Id}
                    Id={row.Id}
                    name={row.Name}
                    projects={group_projects}
                    tenants={project_tenants}
                    environments={this.state.environments}
                    deployments={this.state.deployments}/>
                  )
              }
            })
          }
      </div>
  )}
}
export default Dashboard
