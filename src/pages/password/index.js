import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./login.scss";
import axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);


    this.handleEmailChange = this.emailChange.bind(this);
    this.handleLoginUser = this.loginUser.bind(this);
  }

  emailChange(e) {
    let email = e.target.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == '') {
      this.props.changeMessage('login','emailErrorText', 'email is empty');
    } else if (re.test(email)) {
      this.props.changeMessage('login','emailErrorText', '');
    } else {
      this.props.changeMessage('login','emailErrorText', 'not correct email');
    }
    this.props.changeMessage('login','email', email);
  }

  loginUser(e) {
    e.stopPropagation();
    e.preventDefault();

    let obj = {
      email: this.props.data.email,

    }

    if (this.props.data.login.emailErrorText.length == 0 && this.props.data.login.email.length != 0) {
      axios.post('http://104.237.3.213:8888/api/forget', obj.email)
        .then(function (response) {
          self.props.changeMessage('user', 'token', response.data.token);
          window.location.pathname = "/dashboard";
        });
    }
  }

  render() {
    return (
      <div className="bg-dark">
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
                      onClick={this.handleLoginUser}>Recover password
              </button>
            </form>
            <div className="text-center">
              <Link className="d-block small mt-3 register-link" to="/register">Register an Account</Link>
              <a className="d-block small" href="/login">Back to login page</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Login);