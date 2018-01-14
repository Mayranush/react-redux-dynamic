import React from "react";
import {connect} from "react-redux";
import {projectDataActions, signInActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./login.scss";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.emailChange.bind(this);
    this.handlePasswordChange = this.passwordChange.bind(this);
    this.handleLoginUser = this.loginUser.bind(this);
    if (this.props.data.user.token !== null) {
      store.dispatch(push('/dashboard'));
    }
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

  passwordChange(e) {
    let password = e.target.value;
    if (password == '') {
      this.props.changeMessage('login', 'passwordErrorText', 'password is empty');
    } else {
      this.props.changeMessage('login', 'passwordErrorText', '');
    }
    this.props.changeMessage('login', 'password', password);
  }

  checkRememberPassword(e) {
    let rememberPassword = e.target.checked;
    this.props.changeMessage('login', 'rememberPassword', rememberPassword);
  }

  loginUser(e) {
    e.stopPropagation();
    e.preventDefault();

    let obj = {
      email: this.props.data.login.email,
      password: this.props.data.login.password,
    };
    if (this.props.data.login.emailErrorText.length == 0 && this.props.data.login.passwordErrorText.length == 0 && this.props.data.login.email.length != 0) {
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
                  className={this.props.data.login.emailErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                  id="inputEmail" type="email"
                  placeholder="Enter email"
                  onBlur={(e) => this.handleEmailChange(e)}/>
                <p
                  className="error-for-input">{this.props.data.login.emailErrorText.length != 0 ? '*' + this.props.data.login.emailErrorText : ''}</p>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>

                <input
                       className={this.props.data.login.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                       id="inputPassword"
                       type="password"
                       placeholder="Password"
                       onKeyUp={(e) => this.handlePasswordChange(e)}/>
                <p
                  className="error-for-input">{this.props.data.login.passwordErrorText.length != 0 ? '*' + this.props.data.login.passwordErrorText : ''}</p>
                <p
                  className="error-for-input">{this.props.data.login.errorText.length != 0 ? '*' + this.props.data.login.errorText : ''}</p>
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
              <button className={this.props.data.login.emailErrorText.length != 0 ||
              this.props.data.login.passwordErrorText.length != 0 ||
              this.props.data.login.email.length == 0 ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                      onClick={(e) => this.handleLoginUser(e)}>Login
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
  state => ({data: state.projectDataReducer.data}),
    {
        ...projectDataActions,
        ...signInActions
    }
)(Login);