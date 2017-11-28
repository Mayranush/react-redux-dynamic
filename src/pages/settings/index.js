import React from "react";
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/menu/footer";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./settings.scss";
import {MyDetails} from "../../components/myDetails/myDetails";
import {TwitterSettings} from "../../components/twitterSettings/twitterSettings";
import {PaymentSettings} from "../../components/paymentSettings/paymentSettings";
import axios from "axios";

export class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.currentTab = 'myDetails';
  }

  componentDidMount() {
    const token = "Token ".concat(this.props.data.user.token);
    console.log(token,"token`")
    // const api = axios.create({
    //   baseURL: "http://104.237.3.213:8888/auth/settings",
    //   //headers: {"Authorisation": token}
    // });
    // //axios.defaults.headers.common['Authorisation'] = token;
    setTimeout(function(){ 

      axios.get("http://104.237.3.213:8888/auth/settings", { "headers": {"Authorisation": token}})
        .then(function(response) {
          console.log(response.data);
        });

    }, 3000);
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="main-content">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <span><p onClick={() => this.props.changeTabInSettings('myDetails')}
                       className={this.props.data.settingsCurrentTab == 'myDetails' ? "nav-link active tab" : "nav-link tab"}>My details</p></span>
            </li>
            <li className="nav-item">
              <span> <p onClick={() => this.props.changeTabInSettings('twitterSettings')}
                        className={this.props.data.settingsCurrentTab == 'twitterSettings' ? "nav-link active tab" : "nav-link tab"}>Twitter Settings</p></span>
            </li>
            <li className="nav-item">
              <span><p onClick={() => this.props.changeTabInSettings('paymentSettings')}
                       className={this.props.data.settingsCurrentTab == 'paymentSettings' ? "nav-link active tab" : "nav-link tab"}>Payment details</p></span>
            </li>

          </ul>
<div className="settings-tab">

          {this.props.data.settingsCurrentTab == 'myDetails' && <MyDetails />}
          {this.props.data.settingsCurrentTab == 'twitterSettings' && <TwitterSettings />}
          {this.props.data.settingsCurrentTab == 'paymentSettings' && <PaymentSettings />}

</div>
          <div className="rect">Need any help? <a className="contact-us" href="">Contact us here</a></div>
          <div className="update-info"><button className="btn-warning">Update Settings</button></div>
        </div>
        <Footer />
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Settings);