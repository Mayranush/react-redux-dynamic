import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./settings.scss";
import {MyDetails} from "../../components/myDetails/myDetails";
import {TwitterSettings} from "../../components/twitterSettings/twitterSettings";
import {TwitterCriteria} from "../../components/twitterCriteria/twitterCriteria";
import {PaymentSettings} from "../../components/paymentSettings/paymentSettings";

export class Settings extends React.Component {
  constructor(props) {

    super(props);
    this.handleGetTwitterSettings = this.getTwitterSettings.bind(this);
    this.handleUpdateSettings = this.updateSettings.bind(this);
    this.handleUpdateTwSettings = this.updateTwSettings.bind(this);
    this.handleUpdateTwCriteria = this.updateTwCriteria.bind(this);
    this.currentTab = 'myDetails';
  }


  getTwitterSettings(e, param) {
    e.stopPropagation();
    e.preventDefault();
    if (param === this.props.data.settingsCurrentTab) {
      return;
    }
    if (param === 'myDetails' && !this.props.data.user.dataReceived) {
      this.props.getData("auth/settings", "get", {}, true);
    } else if (param === 'twitterSettings' && !this.props.data.twitter.dataReceivedApiDetails) {
      this.props.getData("auth/tw-api-details", "get", {}, true);
    } else if (param === 'twitterCriteria' && !this.props.data.twitter.dataReceivedTipCriteria) {
      this.props.getData("auth/tw-tip-criteria", "get", {}, true);
    }

    this.props.changeTabInSettings(param);

  }

  updateTwSettings() {
   this.props.changeMessage('twitter', 'consumerKey', this.twSettings.refs.consumerKey.value);
   this.props.changeMessage('twitter', 'consumerSecret', this.twSettings.refs.consumerSecret.value);
   this.props.changeMessage('twitter', 'accessToken', this.twSettings.refs.accessToken.value);
   this.props.changeMessage('twitter', 'accessTokenSecret', this.twSettings.refs.accessTokenSecret.value);
    let objDetails = {
      "consumerKey": this.props.data.twitter.consumerKey,
      "consumerSecret": this.props.data.twitter.consumerSecret,
      "accessToken": this.props.data.twitter.accessToken,
      "accessTokenSecret": this.props.data.twitter.accessTokenSecret,
    };
    this.props.getData("auth/tw-api-details", "post", objDetails, true);

  }

  updateTwCriteria() {

    this.props.changeMessage('twitter', 'minFollowers', this.twSettings.refs.minFollowers.value);
    this.props.changeMessage('twitter', 'tipsPerDay', this.twSettings.refs.tipsPerDay.value);
    this.props.changeMessage('twitter', 'tipsPerDayPerUser', this.twSettings.refs.tipsPerDayPerUser.value);
    this.props.changeMessage('twitter', 'coinAmount', this.twSettings.refs.coinAmount.value);
    this.props.changeMessage('twitter', 'coinType', this.twSettings.refs.coinType.value);
    this.props.changeMessage('twitter', 'hashtags', this.twSettings.refs.hashtags.value);
    // this.props.changeMessage("twitter", "tipsLike", this.twSettings.refs.tipsLike.checked);
    this.props.changeMessage("twitter", "tipsTweet", this.twSettings.refs.tipsTweet.checked);
    this.props.changeMessage("twitter", "tipsReTweet", this.twSettings.refs.tipsReTweet.checked);
    this.props.changeMessage("twitter", "tipsFollowers", this.twSettings.refs.tipsFollowers.checked);
    let objCrit = {
      "minFollowers": this.props.data.twitter.minFollowers,
      "tipsPerDay": this.props.data.twitter.tipsPerDay,
      "tipsPerDayPerUser": this.props.data.twitter.tipsPerDayPerUser,
      "coinAmount": this.props.data.twitter.coinAmount,
      "coinType": this.props.data.twitter.coinType,
      "hashtags": this.props.data.twitter.hashtags,
      // "tipsLike": this.props.data.twitter.tipsLike,
      "tipsTweet": this.props.data.twitter.tipsTweet,
      "tipsReTweet": this.props.data.twitter.tipsReTweet,
      "tipsFollowers": this.props.data.twitter.tipsFollowers,
    };
    this.props.getData("auth/tw-tip-criteria", "post", objCrit, true);
  }

  updateSettings() {
    this.props.changeMessage('user', 'firstname', this.settings.refs.firstname.value);
    this.props.changeMessage('user', 'lastname', this.settings.refs.lastname.value);
    // this.settings.refs.email.value !== "" && this.props.changeMessage('user', 'email', this.settings.refs.email.value);
    this.props.changeMessage('user', 'twUsername', this.settings.refs.twUsername.value);
    let obj = {
      "firstname": this.props.data.user.firstname,
      "lastname": this.props.data.user.lastname,
      "twUsername": this.props.data.user.twUsername,
    };

    this.props.getData("auth/settings", "post", obj, true);
  }

  componentDidMount() {
    this.props.getData("auth/bot", "get", {}, true);
    
    var param = this.props.data.settingsCurrentTab == 'myDetails' ? 'auth/settings':
          (this.props.data.settingsCurrentTab == 'twitterSettings' ? 'auth/tw-api-details' :
          (this.props.data.settingsCurrentTab == 'twitterCriteria' ? 'auth/tw-tip-criteria' : '') );

    this.props.getData(param, "get", {}, true);
  }

  render() {
    return (
      <div className="main-content">
        <div className="header-section">Settings</div>
        <ul>
          <li className={this.props.data.settingsCurrentTab == 'myDetails' ? "one active tab" : "one tab"}>
            <span><p onClick={(e) => this.handleGetTwitterSettings(e, 'myDetails')}>My details</p></span>
          </li>
          <li className={this.props.data.settingsCurrentTab == 'twitterSettings' ? "two active tab" : "two tab"}>
            <span> <p onClick={(e) => this.handleGetTwitterSettings(e, 'twitterSettings')}
            >Twitter API Details</p></span>
          </li>
          <li className={this.props.data.settingsCurrentTab == 'twitterCriteria' ? "three active tab" : "three tab"}>
            <span> <p onClick={(e) => this.handleGetTwitterSettings(e, 'twitterCriteria')}
            >Twitter Criteria</p></span>
          </li>
          <li className={this.props.data.settingsCurrentTab == 'paymentSettings' ? "four active tab" : "four tab"}>
            <span><p onClick={(e) => this.handleGetTwitterSettings(e, 'paymentSettings')}>Payment details</p></span>
          </li>
          <hr className="hr"/>
        </ul>
        <div className="settings-tab">
          {this.props.data.settingsCurrentTab == 'myDetails' && this.props.data.user.dataReceived
          && <MyDetails
            user={this.props.data.user}
            updateSettings={this.handleUpdateSettings}
            ref={(input) => this.settings = input}/>}
          {this.props.data.settingsCurrentTab == 'twitterSettings' && this.props.data.twitter.dataReceivedApiDetails
          && <TwitterSettings twitter={this.props.data.twitter}
                              updateSettings={this.handleUpdateTwSettings}
                              changeMessage={this.props.changeMessage}
                              cleanData={this.props.cleanData}
                              ref={(input) => this.twSettings = input}/>}

          {this.props.data.settingsCurrentTab == 'twitterCriteria' && this.props.data.twitter.dataReceivedTipCriteria
          && <TwitterCriteria twitter={this.props.data.twitter}
                              updateSettings={this.handleUpdateTwCriteria}
                              changeMessage={this.props.changeMessage}
                              cleanData={this.props.cleanData}
                              ref={(input) => this.twSettings = input}/>}
          {this.props.data.settingsCurrentTab == 'paymentSettings' && <PaymentSettings />}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Settings);