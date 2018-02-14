import React from "react";
import {connect} from "react-redux";
import {generalActions, signInActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./login.scss";
import {push} from "react-router-redux";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.emailChange.bind(this);
    this.handlePasswordChange = this.passwordChange.bind(this);
    this.handlePasswordForget = this.loginUser.bind(this);
    if (this.props.general.token !== null) {
      store.dispatch(push('/dashboard'));
    }
  }

  emailChange(e) {
    let email = e.target.value;
    this.props.emailChange(email);
  }

  passwordChange(e) {
    let password = e.target.value;
    this.props.passwordChange(password);
  }

  checkRememberPassword(e) {
    let rememberPassword = e.target.checked;
    this.props.doesRememberPassword(rememberPassword);
  }

  loginUser(e) {
    e.stopPropagation();
    e.preventDefault();

    let obj = {
      email: this.props.data.email,
      password: this.props.data.password,
    };
    if (this.props.data.emailErrorText.length == 0 && this.props.data.passwordErrorText.length == 0 && this.props.data.email.length != 0) {
      this.props.signIn(obj);
    }
  }

  render() {
    return (
      <div className="bg-dark bg-dark-login">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">
            <h4 className="register">Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                  className={this.props.data.emailErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                  id="inputEmail" type="email"
                  placeholder="Enter email"
                  onBlur={(e) => this.handleEmailChange(e)}/>
                <p
                  className="error-for-input">{this.props.data.emailErrorText.length != 0 ? '*' + this.props.data.emailErrorText : ''}</p>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>

                <input
                       className={this.props.data.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                       id="inputPassword"
                       type="password"
                       placeholder="Password"
                       onKeyUp={(e) => this.handlePasswordChange(e)}/>
                <p
                  className="error-for-input">{this.props.data.passwordErrorText.length != 0 ? '*' + this.props.data.passwordErrorText : ''}</p>
                <p
                  className="error-for-input">{this.props.data.errorText.length != 0 ? '*' + this.props.data.errorText : ''}</p>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input"
                           type="checkbox"
                           onChange={(e) => this.handleCheckRememberPassword(e)}/> Remember Password
                  </label>
                </div>
              </div>
              <button className={this.props.data.emailErrorText.length != 0 ||
              this.props.data.passwordErrorText.length != 0 ||
              this.props.data.email.length == 0 ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                      onClick={(e) => this.handlePasswordForget(e)}>Login
              </button>
            </form>
            <hr/>
            <a href="#" className="fa fa-twitter tw-login fa-login">
              <span className=""> Twitter</span>
            </a>
            <a href="#" className="fa fa-facebook fb-login fa-login">
              <span className=""> Facebook</span>
            </a>
            <div className="text-center">
              <Link className="d-block small mt-3 register-link" to="/register">Register an Account</Link>
              <Link className="d-block small" to="/password/recovery">Forgot Password?</Link>
              <Link className="d-block small mt-3 home-link" to="/">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.signIn, general: state.general}),
    {
        ...generalActions,
        ...signInActions
    }
)(Login);