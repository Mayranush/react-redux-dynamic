import React from "react";
import {connect} from "react-redux";
import {passwordForgetActions, projectDataActions} from "../../../actions/index";
import {Link} from "react-router/es6";
import "../login.scss";

export class Login extends React.Component {
  constructor(props) {
    super(props);


    this.handleEmailChange = this.emailChange.bind(this);
    this.handlePasswordForget = this.passwordForget.bind(this);
  }

  emailChange(e) {
    let email = e.target.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == '') {
      this.props.changeMessage('login', 'emailErrorText', 'email is empty');
    } else if (re.test(email)) {
      this.props.changeMessage('login', 'emailErrorText', '');
    } else {
      this.props.changeMessage('login', 'emailErrorText', 'not correct email');
    }
    this.props.changeMessage('login', 'email', email);
  }

  passwordForget(e) {
    e.stopPropagation();
    e.preventDefault();

    let obj = {
      email: this.props.data.login.email,
    };

    if (this.props.data.login.emailErrorText.length == 0 && this.props.data.login.email.length != 0) {
      this.props.passwordForget(obj);
    }
  }

  render() {
    return (
      <div className="bg-dark bg-dark-password-recovery">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">
            <span className="register">Password recovery</span>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                  className={this.props.data.login.emailErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                  id="inputEmail" type="email"
                  placeholder="Enter email"
                  onBlur={(e) => this.handleEmailChange(e)}
                  defaultValue={this.props.data.login.email}/>
                <p
                  className="error-for-input">{this.props.data.login.emailErrorText.length != 0 ? '*' + this.props.data.login.emailErrorText : ''}</p>
              </div>


              <button className={this.props.data.login.emailErrorText.length != 0 ||
              this.props.data.login.email.length == 0 ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                      onClick={this.handlePasswordForget}>Recover password
              </button>
            </form>
            <div className="text-center">
              <Link className="d-block small mt-3 register-link" to="/register">Register an Account</Link>
              <Link className="d-block small" to="login">Back to login page</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {
    ...projectDataActions,
    ...passwordForgetActions
  }
)(Login);