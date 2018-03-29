import React from "react";
import {connect} from "react-redux";
import {projectDataActions, signUpActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./register.scss";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstnameChange = this.firstnameChange.bind(this);
    this.handleLastnameChange = this.lastnameChange.bind(this);
    this.handleREmailChange = this.emailChange.bind(this);
    this.handleTwitterChange = this.twitterChange.bind(this);
    this.handleRPasswordChange = this.passwordChange.bind(this);
    this.handleRConfirmPasswordChange = this.confirmChange.bind(this);
    this.handleRegisterUser = this.registerUser.bind(this);
  }

  twitterChange(e) {
    let twitterAccount = e.target.value;
    this.props.twitterAccountChange(twitterAccount);
  }

  firstnameChange(e) {
    let firstname = e.target.value;
    if (firstname != '') {
      this.props.firstnameChange(firstname);
    }
  }

  lastnameChange(e) {
    let lastname = e.target.value;
    if (lastname != '') {
      this.props.lastnameChange(lastname);
    }
  }

  emailChange(e) {
    let email = e.target.value;
    this.props.emailChangeInSignUp(email);
  }

  passwordChange(e) {
    let password = e.target.value;
    this.props.passwordChangeInSignUp(password, this.props.data.confirmPassword);
  }

  confirmChange(e) {
    let password = e.target.value;
    this.props.confirmChange(password, this.props.data.password);
  }

  registerUser(e) {
    e.stopPropagation();
    e.preventDefault();
console.log("here 111111111111111111")
    let obj = {
      email: this.props.data.email,
      password: this.props.data.password,
      firstname: this.props.data.firstname,
      lastname: this.props.data.lastname,
      twUsername: this.props.data.twitterAccount
    };
console.log(obj, "obj 111111111111111111")
console.log(this.props.data, "this.props.data 111111111111111111")

    if (this.props.data.emailErrorText.length == 0
      && this.props.data.twitterAccountErrorText.length == 0
      && this.props.data.passwordErrorText.length == 0
      && this.props.data.email.length != 0
      && this.props.data.twitterAccount.length != 0
      && this.props.data.password.length != 0

    && this.props.data.password == this.props.data.confirmPassword) {
      console.log("here 222222222222222222")

      this.props.signUp(obj);
    }

  }

  render() {
    return (
      <div className="bg-dark bg-dark-register">
        <div className="card card-register mx-auto mt-5">
          <div className="card-header">
            <span className="register">Register an Account with</span>
            <a href="#" className="btn btn-primary btn-lg btn-twitter-reg">
              <i className="fab fa-twitter fa-fw"/>
              <span className="network-name">Twitter</span>
            </a>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="firstname">First name</label>
                    <input className="form-control" id="inputname"
                           type="text" aria-describedby="nameHelp"
                           onBlur={(e) => this.handleFirstnameChange(e)}
                           placeholder="Enter first name"/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastname">Last name</label>
                    <input className="form-control" id="inputLastname"
                           type="text" aria-describedby="nameHelp"
                           onBlur={(e) => this.handleLastnameChange(e)}
                           placeholder="Enter last name"/>
                  </div>
                </div>
              </div>
              <div className="form-group email">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="email">Email address</label>
                    <input className={this.props.data.emailErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                           id="exampleInputEmail1" type="email" aria-describedby="emailHelp"
                           onBlur={(e) => this.handleREmailChange(e)}
                           placeholder="Enter email"/>
                    <p
                      className="error-for-input">{this.props.data.emailErrorText.length != 0 ? '*' + this.props.data.emailErrorText : ''}</p>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="twitterAccount">Twitter Username</label>
                    <input className={this.props.data.twitterAccountErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                           id="twitterUsername" type="text" aria-describedby="twitterUsernameHelp"
                           onBlur={(e) => this.handleTwitterChange(e)}
                           placeholder="Enter Twitter username"/>
                    <p
                      className="error-for-input">{this.props.data.twitterAccountErrorText.length != 0 ? '*' + this.props.data.twitterAccountErrorText : ''}</p>

                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="password">Password</label>
                    <input className={this.props.data.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                           id="exampleInputPassword1" type="password" placeholder="Password"
                           onBlur={(e) => this.handleRPasswordChange(e)}/>
                    {/*<p*/}
                      {/*className="error-for-input">{this.props.data.passwordErrorText.length != 0 ? '*' + this.props.data.passwordErrorText : ''}</p>*/}

                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password">Confirm password</label>
                    <input className={this.props.data.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                           id="exampleConfirmPassword" type="password" placeholder="Confirm password"
                           onBlur={(e) => this.handleRConfirmPasswordChange(e)}/>
                   
                  </div>
                </div>
              </div>
              <p
              className="error-for-input">{this.props.data.passwordErrorText.length != 0 ? '*' + this.props.data.passwordErrorText : ''}</p>

              <button className="btn btn-primary btn-block register" onClick={(e) => this.handleRegisterUser(e)}>Register</button>
            </form>
            <div className="text-center">
              <Link className="d-block small mt-3 login-link" to="/login"> Already have an account? Go to Login
                Page</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.register}),
    {
        ...projectDataActions,
        ...signUpActions
    }
)(Register);