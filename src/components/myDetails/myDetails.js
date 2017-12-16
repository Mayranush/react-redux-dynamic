/**
 * Created by Shushi on 11/14/2017.
 */
import React from "react";
import {projectDataActions} from "../../actions/index";
import "./myDetails.scss";
import PropTypes from 'prop-types';
import {Link} from "react-router/es6";

export class MyDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    twUsername: PropTypes.string
  }

  render() {
    return (
      <div className="my-details">
        <form className="form-horizontal" role="form">
          <div className="form-group my-detail">
            <label htmlFor="firstname" className="col-lg-3 control-label my-detail">First name</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="first_name" className="form-control" type="text" defaultValue={this.props.user.firstname} ref="firstname"/>
            </div>
          </div>

          <div className="form-group my-detail">
            <label htmlFor="lastname" className="col-lg-3 control-label my-detail">Last name</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="last_name" className="form-control" type="text" defaultValue={this.props.user.lastname} ref="lastname"/>
            </div>
          </div>

          <div className="form-group my-detail">
            <label htmlFor="email" className="col-lg-3 control-label my-detail">Email</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="user_email" className="form-control" type="text" defaultValue={this.props.user.email} ref="email" disabled/>
            </div>
          </div>
          <div className="form-group my-detail">
            <label htmlFor="twUsername" className="col-lg-3 control-label my-detail">Twitter Username</label>
            <div className="col-lg-3 form-group-values-my-details">
              <input id="twUsername" className="form-control" type="text" defaultValue={this.props.user.twUsername} ref="twUsername"/>
            </div>
          </div>
        </form>
        <div className="div-password-recovery">
          <a className="password-recovery" href="">Reset password</a>
        </div>
        <div className="rect">Need any help? <Link className="contact-us" to="">Contact us here</Link></div>
        <div className="update-info">
          <button className="btn btn-warning settings" onClick={() => this.props.updateSettings()}>Update My Details</button>
        </div>
      </div>
    )
  }
}

