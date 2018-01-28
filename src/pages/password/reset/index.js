import React from "react";
import {connect} from "react-redux";
import {checkActions, projectDataActions} from "../../../actions/index";
import {Link} from "react-router/es6";
import "../login.scss";

export class Login extends React.Component {
  constructor(props) {
    super(props);


    this.handleRPasswordChange = this.passwordChange.bind(this);
    this.handleRConfirmPasswordChange = this.confirmChange.bind(this);
    this.handleResetPassword = this.resetPassword.bind(this);
  }

  passwordChange(e) {

    let password = e.target.value;
    if (password == '') {
      this.props.changeMessage('register', 'passwordErrorText', 'password is empty');
    } else if (password == this.props.data.register.confirmPassword) {
      this.props.changeMessage('register', 'passwordErrorText', '');
      this.props.changeMessage('register', 'password', password);
    }
    else {
      this.props.changeMessage('register', 'passwordErrorText', 'password not matching');
      this.props.changeMessage('register', 'password', password);
    }

  }

  confirmChange(e) {

    let password = e.target.value;
    if (password == '') {
      this.props.changeMessage('register', 'passwordErrorText', 'password is empty');
    } else if (password == this.props.data.register.password) {
      this.props.changeMessage('register', 'passwordErrorText', '');
      this.props.changeMessage('register', 'confirmPassword', password);
    } else {
      this.props.changeMessage('register', 'passwordErrorText', 'password not matching');
      this.props.changeMessage('register', 'confirmPassword', password);
    }

  }

  resetPassword() {
    let obj = {
      password: this.props.data.register.password,
      vid: this.props.data.user.vid
    };
    if (this.props.data.register.passwordErrorText.length == 0
      && this.props.data.register.password.length != 0
      && this.props.data.register.password == this.props.data.register.confirmPassword) {
      this.props.resetPassword(obj);
    }
  }

  render() {
    return (
      <div className="bg-dark bg-dark-password-recovery">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">
            <span className="register">Reset password</span>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                      className={this.props.data.register.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="exampleInputPassword1" type="password" placeholder="Password"
                      onKeyUp={(e) => this.handleRPasswordChange(e)}/>
                    </div>
                  <div className="col-md-6">
                    <label htmlFor="password">Confirm password</label>
                    <input
                      className={this.props.data.register.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="exampleConfirmPassword" type="password" placeholder="Confirm password"
                      onKeyUp={(e) => this.handleRConfirmPasswordChange(e)}/>

                  </div>
                </div>
              </div>
              <p
                className="error-for-input">{this.props.data.register.passwordErrorText.length != 0 ? '*' + this.props.data.register.passwordErrorText : ''}</p>

            </form>
            <button className={this.props.data.register.passwordErrorText.length != 0 ||
            this.props.data.register.password.length == 0 ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                    onClick={() => this.handleResetPassword()}>Reset password
            </button>
            <div className="text-center">
              <br/>
              <Link className="d-block small" to="login">Go to login page</Link>
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
    ...checkActions
  }
)(Login);