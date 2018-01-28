import React from "react";
import "./popup.scss";
import PropTypes from "prop-types";

export class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.passwordChange.bind(this);
    this.handleConfirmPasswordChange = this.confirmChange.bind(this);
    this.handleChangePassword = this.changePassword.bind(this);
  }

  passwordChange(e) {

    let password = e.target.value;
    if (password == '') {
      this.props.changeMessage('popup', 'passwordErrorText', 'password is empty');
    } else if (password == this.props.popup.confirmPassword) {
      this.props.changeMessage('popup', 'passwordErrorText', '');
      this.props.changeMessage('popup', 'password', password);
    }
    else {
      this.props.changeMessage('popup', 'passwordErrorText', 'password not matching');
      this.props.changeMessage('popup', 'password', password);
    }

  }

  confirmChange(e) {

    let password = e.target.value;
    if (password == '') {
      this.props.changeMessage('popup', 'passwordErrorText', 'password is empty');
    } else if (password == this.props.popup.password) {
      this.props.changeMessage('popup', 'passwordErrorText', '');
      this.props.changeMessage('popup', 'confirmPassword', password);
    } else {
      this.props.changeMessage('popup', 'passwordErrorText', 'password not matching');
      this.props.changeMessage('popup', 'confirmPassword', password);
    }

  }

  changePassword() {
    let obj = {
      password: this.props.popup.password
    };
    if (this.props.popup.passwordErrorText.length == 0
      && this.props.popup.password.length != 0
      && this.props.popup.password == this.props.popup.confirmPassword) {

      this.props.changePassword(obj);
    }
  }

  static propTypes = {
    popup: PropTypes.object,
    closePopup: PropTypes.func,
    changeMessage: PropTypes.func,
    changePassword: PropTypes.func

  };

  render() {
    return (
      <div className="general-div klor">
        {this.props.popup.text && <div className="text-block">
          <p>{this.props.popup.text}</p>
          <div className="close-button" onClick={() => this.props.closePopup()}>ok</div>
        </div>}
        {this.props.popup.resetPassword && <div>
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="password">Password</label>
                  <input
                    className={this.props.popup.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                    id="exampleInputPassword1" type="password" placeholder="Password"
                    onKeyUp={(e) => this.handlePasswordChange(e)}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="password">Confirm password</label>
                  <input
                    className={this.props.popup.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                    id="exampleConfirmPassword" type="password" placeholder="Confirm password"
                    onKeyUp={(e) => this.handleConfirmPasswordChange(e)}/>

                </div>
              </div>
            </div>
            <p
              className="error-for-input">{this.props.popup.passwordErrorText.length != 0 ? '*' + this.props.popup.passwordErrorText : ''}</p>

          </form>
          <button className={this.props.popup.passwordErrorText.length != 0 ||
          this.props.popup.password.length == 0 ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                  onClick={() => this.handleChangePassword()}>Reset password
          </button>
        </div>}

      </div>
    )
  }
}

