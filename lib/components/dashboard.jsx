import React,  {PropTypes} from 'react';
var api = require('../helpers/octo_api')
import utils from '../utils/utils'

import ProjectGroup from './projectgroup'
class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state= {project_groups: []}
  }

  componentDidMount(){
    return api.get_project_groups()
    .then(response => {
      this.setState({project_groups: response.body})

    })
    .catch(response => {
      this.setState({error_message: response})
    })
  }

  render(){
    return(
      <div>
        <p>Hello World</p>
        {
          this.state.project_groups.map((row) => {
            return (
              <ProjectGroup
                key={row.Id}
                name={row.Name} />
              )
            })
        }
      </div>
  )}
}
export default Dashboard
