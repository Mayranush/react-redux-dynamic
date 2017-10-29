import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import { Link } from 'react-router/es6';
import "./login.scss";

export class Login extends React.Component {
  constructor(props) {    
    super(props);
  }
  
  render() {      
    {console.log(this.props.data,"this props---------------Login");   } 
    return (
      <div>
        <Header />          
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember Password</label>
                </div>
              </div>
              <a className="btn btn-primary btn-block" href="">Login</a>
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