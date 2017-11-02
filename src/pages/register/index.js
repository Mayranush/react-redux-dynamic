import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import { Link } from 'react-router/es6';
import "./register.scss";
import "../blog/blog.scss";

export class Register extends React.Component {
  constructor(props) {    
    super(props);
  }
  
  render() {      
    {console.log(this.props.data,"this props---------------Register");   } 
    return (
      <div className="bg-dark">
        <div className="card card-register mx-auto mt-5">
          <div className="card-header">Register an Account</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label for="firstName">First name</label>
                    <input className="form-control" id="exampleInputName" type="text" aria-describedby="nameHelp" placeholder="Enter first name" />
                  </div>
                  <div className="col-md-6">
                    <label for="lastName">Last name</label>
                    <input className="form-control" id="exampleInputLastName" type="text" aria-describedby="nameHelp" placeholder="Enter last name"/>
                  </div>
                </div>
              </div>
              <div className="form-group email">
                <label for="email">Email address</label>
                <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label for="password">Password</label>
                    <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
                  </div>
                  <div className="col-md-6">
                    <label for="confirmPasswor">Confirm password</label>
                    <input className="form-control" id="exampleConfirmPassword" type="password" placeholder="Confirm password" />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-block register">Register</button>
            </form>
            <div className="text-center">
              <Link className="d-block small mt-3 login-link" to="/login">Login Page</Link>
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
)(Register);