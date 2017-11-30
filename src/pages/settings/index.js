import React from "react";
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/menu/footer";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./settings.scss";
import {MyDetails} from "../../components/myDetails/myDetails";
import {TwitterSettings} from "../../components/twitterSettings/twitterSettings";
import {PaymentSettings} from "../../components/paymentSettings/paymentSettings";

export class Settings extends React.Component {
  constructor(props) {

    super(props);
    this.handleGetTwitterSettings = this.getTwitterSettings.bind(this);

    this.currentTab = 'myDetails';
  }


  getTwitterSettings(e, param) {
    e.stopPropagation();
    e.preventDefault();
    if (param === this.props.data.settingsCurrentTab) {
      return;
    }
    if (param === 'myDetails') {
      this.props.getData("auth/settings", "get", {}, true);
    } else if (param === 'twitterSettings') {
      this.props.getData("auth/tw-api-details", "get", {}, true);
    }

    this.props.changeTabInSettings(param);

  }

  componentDidMount() {
    this.props.getData("auth/settings", "get", {}, true);


    //4.
    // axios.put("http://104.237.3.213:8888/auth/tw-api-details", obj , {headers: {'Authorization': this.props.data.user.token}})
    //   .then(function (response) {
    //   });

// //6.
    // axios.get("http://104.237.3.213:8888/auth/tw-tip-criteria", {headers: {'Authorization': this.props.data.user.token}})
    //   .then(function (response) {
    //   });
//7.

    let objCrit = {
      tipsPerDay: 'a1',
      minFollowers: 'a2',
      tipsTweet: true,
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
          <ul>
            <li className={this.props.data.settingsCurrentTab == 'myDetails' ? "one active" : "one"}>
              <span><p onClick={(e) => this.handleGetTwitterSettings(e, 'myDetails')}>My details</p></span>
            </li>
            <li className={this.props.data.settingsCurrentTab == 'twitterSettings' ? "two active" : "two"}>
              <span> <p onClick={(e) => this.handleGetTwitterSettings(e, 'twitterSettings')}
                        >Twitter Settings</p></span>
            </li>
            <li className={this.props.data.settingsCurrentTab == 'paymentSettings' ? "three active" : "three"}>
              <span><p onClick={(e) => this.handleGetTwitterSettings(e, 'paymentSettings')}>Payment details</p></span>
            </li>
            <hr/>
          </ul>
          <div className="settings-tab">

            {this.props.data.settingsCurrentTab == 'myDetails' && <MyDetails user={this.props.data.user}/>}
            {this.props.data.settingsCurrentTab == 'twitterSettings' && <TwitterSettings prop={this.props}/>}
            {this.props.data.settingsCurrentTab == 'paymentSettings' && <PaymentSettings />}

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