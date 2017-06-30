import React, {PropTypes} from 'react'

class Environment extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <th>
        <span className="environment_name">{this.props.name}</span>
      </th>
    )
  }
}

Environment.propTypes = {
  name: PropTypes.string
}

export default Environment
