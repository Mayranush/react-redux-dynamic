import React from "react";
import {connect} from "react-redux";
import {checkActions, generalActions, signUpActions} from "../../../actions/index";
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
      this.props.passwordChangeInSignUp(password, this.props.data.confirmPassword);
    }

  confirmChange(e) {
    let password = e.target.value;
    this.props.confirmChange(password, this.props.data.password);   
  }

  resetPassword() {
    let obj = {
      password: this.props.data.password,
      vid: this.props.general.vid
    };
    if (this.props.data.passwordErrorText.length == 0
      && this.props.data.password.length != 0
      && this.props.data.password == this.props.data.confirmPassword) {
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
                      className={this.props.data.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="exampleInputPassword1" type="password" placeholder="Password"
                      onKeyUp={(e) => this.handleRPasswordChange(e)}/>
                    </div>
                  <div className="col-md-6">
                    <label htmlFor="password">Confirm password</label>
                    <input
                      className={this.props.data.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="exampleConfirmPassword" type="password" placeholder="Confirm password"
                      onKeyUp={(e) => this.handleRConfirmPasswordChange(e)}/>

                  </div>
                </div>
              </div>
              <p
                className="error-for-input">{this.props.data.passwordErrorText.length != 0 ? '*' + this.props.data.passwordErrorText : ''}</p>

            </form>
            <button className={this.props.data.passwordErrorText.length != 0 ||
            this.props.data.password.length == 0 ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
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
  state => ({data: state.register, general: state.general}),
  {
    ...generalActions,
    ...checkActions,
    ...signUpActions
  }
)(Login);