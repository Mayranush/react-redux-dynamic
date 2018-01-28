import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/menu/footer";
import {passwordForgetActions, projectDataActions} from "../../actions/index";
import {Popup} from "../../components/popup/popup";

class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.handleClosePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.props.changeMessage('popup', 'show', false);
    this.props.changeMessage('popup', 'text', '');
  }


  render() {
    return (
      <main className="viewport">
        {this.props.data.popup.show &&
        <Popup popup={this.props.data.popup}
               closePopup={this.handleClosePopup}
               changeMessage={this.props.changeMessage}
               changePasswordAction={this.props.changePasswordAction}
               changePassword={this.props.changePassword}/>}
        {((this.props.data.user && this.props.data.user.token) || window.sessionStorage.getItem("token")) &&
        <Menu changeMessage={this.props.changeMessage}
              cleanData={this.props.cleanData}/>}
        {this.props.children}
        {((this.props.data.user && this.props.data.user.token) || window.sessionStorage.getItem("token")) &&
        <Footer />}
      </main>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {
    ...projectDataActions,
    ...passwordForgetActions
  }
)(MainLayout);