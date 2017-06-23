import React,  {PropTypes} from 'react'
var api = require('../helpers/octo_api')
import utils from '../utils/utils'
import Tenant from './tenant'
class ProjectGroup extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <section>
        <span className="project_group_name">{this.props.name}</span>
        {
          this.props.tenants.map(row => {
            return (
              <Tenant
                key={row.Id}
                name={row.Name} />
              )
          })
        }
      </section>
    )

  }
}



export default ProjectGroup

ProjectGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}
