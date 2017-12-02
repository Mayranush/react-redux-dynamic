/**
 * Created by Shushi on 11/14/2017.
 */
import React from "react";
import {projectDataActions} from "../../actions/index";
import "./myDetails.scss";
import PropTypes from 'prop-types';

export class MyDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    twUsername: PropTypes.string
  }

  render() {
    return (
      <div className="my-details">
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="first_name" className="col-lg-3 control-label">First name</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="first_name" className="form-control" type="text" placeholder={this.props.user.firstName} ref="firstName"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="last_name" className="col-lg-3 control-label">Last name</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="last_name" className="form-control" type="text" placeholder={this.props.user.lastName} ref="lastName"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="col-lg-3 control-label">Email</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="user_email" className="form-control" type="text" placeholder={this.props.user.email} ref="email"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="position" className="col-lg-3 control-label">Twitter Username</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="position" className="form-control" type="text" placeholder={this.props.user.twUsername} ref="twUsername"/>
            </div>
          </div>
        </form>
        <div>
          <a className="password-recovery" href="">Reset password</a>
        </div>
        <div className="rect">Need any help? <a className="contact-us" href="">Contact us here</a></div>
        <div className="update-info">
          <button className="btn-warning" onClick={() => this.props.updateSettings()}>Update Settings</button>
        </div>
      </div>
    )
  }
}

