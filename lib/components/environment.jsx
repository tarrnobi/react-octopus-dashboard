import React, {PropTypes} from 'react'

class Environment extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="col">
        <span className="environment_name">{this.props.name}</span>
      </div>
    )
  }
}

Environment.propTypes = {
  name: PropTypes.string
}

export default Environment
