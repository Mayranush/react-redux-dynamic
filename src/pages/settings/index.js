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
    //1.
//     axios.get("http://104.237.3.213:8888/auth/settings", {headers: {'Authorization': this.props.data.user.token}})
//       .then(function (response) {
//       });
// //2.
//     axios.get("http://104.237.3.213:8888/auth/tw-api-details", {headers: {'Authorization': this.props.data.user.token}})
//       .then(function (response) {
//       });
//3.

    // let obj = {
    //   consumerKey:'a1',
    //   consumerSecret: 'a2',
    //   accessToken: 'a3',
    //   accessTokenSecret: 'a4'
    // };
    // axios.post("http://104.237.3.213:8888/auth/tw-api-details", obj , {headers: {'Authorization': this.props.data.user.token}})
    //   .then(function (response) {
    //   });

    //4.
    // axios.put("http://104.237.3.213:8888/auth/tw-api-details", obj , {headers: {'Authorization': this.props.data.user.token}})
    //   .then(function (response) {
    //   });

// //6.
    axios.get("http://104.237.3.213:8888/auth/tw-tip-criteria", {headers: {'Authorization': this.props.data.user.token}})
      .then(function (response) {
      });
//7.

    let objCrit = {
      tipsPerDay:'a1',
      minFollowers: 'a2',
      tipsTweet:true,
      tipsLike: false
    };
    // axios.post("http://104.237.3.213:8888/auth/tw-tip-criteria", objCrit , {headers: {'Authorization': this.props.data.user.token}})
    //   .then(function (response) {
    //   });

    //4.
    // axios.put("http://104.237.3.213:8888/auth/tw-tip-criteria", objCrit , {headers: {'Authorization': this.props.data.user.token}})
    //   .then(function (response) {
    //   });


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
          <div className="update-info">
            <button className="btn-warning">Update Settings</button>
          </div>
        </div>
        <Footer />
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Settings);