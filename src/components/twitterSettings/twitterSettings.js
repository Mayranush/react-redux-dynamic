/**
 * Created by Shushi on 11/14/2017.
 */

import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./twitterSettings.scss"

export class TwitterSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="last_name" className="col-lg-3 control-label tw-crit">Age of twitter account of person who is to be tipped</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="last_name" className="form-control" type="text" value=""/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="col-lg-3 control-label tw-crit">Minimum number of followers</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="user_email" className="form-control" type="text" value=""/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="position" className="col-lg-3 control-label tw-crit">Max count of tipping</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="position" className="form-control" type="text" value=""/>
            </div>
          </div>
          <hr/>
          <h6>Select when to tip coin</h6>
          <div className="checkbox">
            <label><input type="checkbox" value=""/>Like</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" value=""/>Tweet</label>
          </div>
        </form>

      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(TwitterSettings);