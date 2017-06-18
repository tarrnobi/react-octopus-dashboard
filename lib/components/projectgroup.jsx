import React,  {PropTypes} from 'react'
var api = require('../helpers/octo_api')
import utils from '../utils/utils'

class ProjectGroup extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <section>
        <h1>{this.props.name}</h1>
      </section>
    )

  }
}



export default ProjectGroup

ProjectGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}
