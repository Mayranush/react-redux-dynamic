import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import { Link } from 'react-router/es6';
import "./login.scss";
import classNames from 'classnames';


export class Login extends React.Component {
  constructor(props) {    
    super(props);    

    console.log(this.props,"props") 

    this.handleEmailChange = this.emailChange.bind(this);
    this.handlePasswordChange = this.passwordChange.bind(this);
    this.handleCheckRememberPassword = this.checkRememberPassword.bind(this);
    this.handleLoginUser = this.loginUser.bind(this);
  }

  emailChange(e) {          
    let email = e.target.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {     
      this.props.changeMessage('emailErrorText', '');   
    } else if(email == '') {
      this.props.changeMessage('emailErrorText', 'email is empty'); 
    } else {       
      this.props.changeMessage( 'emailErrorText', 'not correct email');      
    }   
    this.props.changeMessage('email', email);    
  }

  passwordChange(e) {    
    let password = e.target.value;
    if (password == '') {     
      this.props.changeMessage('passwordErrorText', 'password is empty');   
    } else {    
      this.props.changeMessage('passwordErrorText', '');   
    }  
    this.props.changeMessage('password', password);    
  }

  checkRememberPassword(e) {
    let rememberPassword = e.target.checked;
    this.props.changeMessage('rememberPassword', rememberPassword); 
  }

  loginUser(e) {
    e.stopPropagation();
    e.preventDefault();    
    
    let obj = {
      email: this.props.data.email,
      password: this.props.data.password,
      isRememberPassword: this.props.data.rememberPassword
    }

    if (this.props.data.emailErrorText.length == 0 && this.props.data.passwordErrorText.length == 0 && this.props.data.email.length != 0) {
      //window.location.pathname = "/blog";
      console.log("go blog")
    }

    console.log(obj,"obj");
  }
  
  render() {          
    return (
      <div>
        <Header />          
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input  className={this.props.data.emailErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                        id="inputEmail" type="email"
                        placeholder="Enter email"
                        onBlur={(e) => this.handleEmailChange(e)}/>
                <p className="error-for-input">{this.props.data.emailErrorText.length != 0 ? '*' + this.props.data.emailErrorText : ''}</p>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input  className={this.props.data.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                        id="inputPassword"
                        type="password" 
                        placeholder="Password" 
                        onBlur={(e) => this.handlePasswordChange(e)} />
                <p className="error-for-input">{this.props.data.passwordErrorText.length != 0 ? '*' + this.props.data.passwordErrorText : ''}</p>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input"
                           type="checkbox" 
                           onChange={(e) => this.handleCheckRememberPassword(e)} /> Remember Password
                  </label>
                </div>
              </div>            
              <button className={this.props.data.emailErrorText.length != 0 ||
               this.props.data.passwordErrorText.length != 0 || 
                this.props.data.email.length == 0 ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                      onClick={this.handleLoginUser}>Login</button>              
            </form>
            <div className="text-center">
              <Link className="d-block small mt-3 register-link" to="/register">Register an Account</Link>
              <a className="d-block small" href="">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  
export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Login);