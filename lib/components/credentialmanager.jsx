import React , {PropTypes} from 'react'
import utils from '../utils/utils'


class CredentialManager extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label"
            for="hostname">Host Name:</label>
          <div className="col-sm-10">
            <input className="form-control"
              name="hostname"
              type="text"/>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label"
            for="api_key">API Key:</label>
          <div className="col-sm-10">
            <input className="form-control"
              name="api_key"
              type="text"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary"
              name="save"
              type="submit"
              value="Submit">Save</button>
          </div>
        </div>
      </form>
    )

  }
}

export default CredentialManager
