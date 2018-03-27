import React from "react";
import {connect} from "react-redux";
import {generalActions, settingsActions, popupActions, dashboardActions} from "../../actions/index";
import "./settings.scss";
import {MyDetails} from "../../components/myDetails/myDetails";
import {TwitterSettings} from "../../components/twitterSettings/twitterSettings";
import {TwitterCriteria} from "../../components/twitterCriteria/twitterCriteria";

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
    if (param === 'myDetails' && !this.props.data.dataReceived) {
      this.props.myDetails();
    } else if (param === 'twitterSettings' && !this.props.twitter.dataReceivedApiDetails) {
      this.props.twitterSettings();
    } else if (param === 'twitterCriteria' && !this.props.twitter.dataReceivedTipCriteria) {
      this.props.twitterCriteria();
    }

    this.props.changeTabInSettings(param);

  }

  updateTwSettings() {
    let objDetails = {
      "consumerKey": this.twSettings.refs.consumerKey.value,
      "consumerSecret": this.twSettings.refs.consumerSecret.value,
      "accessToken": this.twSettings.refs.accessToken.value,
      "accessTokenSecret": this.twSettings.refs.accessTokenSecret.value
    };
    this.props.twitterSettingsUpdate(objDetails);
  }

  updateTwCriteria() {
    let objCrit = {
      "minFollowers": this.twSettings.refs.minFollowers.value ? this.twSettings.refs.minFollowers.value : "0",
      "tipsPerDay": this.twSettings.refs.tipsPerDay.value ? this.twSettings.refs.tipsPerDay.value : "0",
      "tipsPerDayPerUser": this.twSettings.refs.tipsPerDayPerUser.value ? this.twSettings.refs.tipsPerDayPerUser.value : "0",
      "coinAmount": this.twSettings.refs.coinAmount.value ? this.twSettings.refs.coinAmount.value : "0",
      "coinType": this.twSettings.refs.coinType.value,
      "hashtags": this.twSettings.refs.hashtags.value,
      "tipsTweet": this.twSettings.refs.tipsTweet.checked,
      "tipsReTweet": this.twSettings.refs.tipsReTweet.checked,
      "tipsFollowers": this.twSettings.refs.tipsFollowers.checked
    };
    this.props.twitterCriteriaUpdate(objCrit);
  }

  updateSettings() {
    let obj = {
      "firstname": this.settings.refs.firstname.value,
      "lastname": this.settings.refs.lastname.value,
      "twUsername": this.settings.refs.twUsername.value
    };

    this.props.myDetailsUpdate(obj);
  }

  componentDidMount() {
    this.props.botGet();
    this.props.data.settingsCurrentTab == 'myDetails' && this.props.myDetails();
    this.props.data.settingsCurrentTab == 'twitterSettings' && this.props.twitterSettings();
    this.props.data.settingsCurrentTab == 'twitterCriteria' && this.props.twitterCriteria();
  }

  render() {
    return (
      <div className="main-content">
        <div className="header-section">Settings</div>
        <ul>
          <li className={this.props.data.settingsCurrentTab === 'myDetails' ? "one active tab" : "one tab"}>
            <span><p onClick={(e) => this.handleGetTwitterSettings(e, 'myDetails')}>My details</p></span>
          </li>
          <li className={this.props.data.settingsCurrentTab === 'twitterSettings' ? "two active tab" : "two tab"}>
            <span> <p onClick={(e) => this.handleGetTwitterSettings(e, 'twitterSettings')}
            >Twitter API Details</p></span>
          </li>
          <li className={this.props.data.settingsCurrentTab === 'twitterCriteria' ? "three active tab" : "three tab"}>
            <span> <p onClick={(e) => this.handleGetTwitterSettings(e, 'twitterCriteria')}
            >Twitter Criteria</p></span>
          </li>
          <hr className="hr"/>
        </ul>
        <div className="settings-tab">
          {this.props.data.settingsCurrentTab === 'myDetails' && this.props.data.dataReceived
          && <MyDetails user={this.props.data}
                        updateSettings={this.handleUpdateSettings}
                        changePopup={this.props.changePopup}
                        ref={(input) => this.settings = input}/>}
          {this.props.data.settingsCurrentTab == 'twitterSettings' && this.props.twitter.dataReceivedApiDetails
          && <TwitterSettings twitter={this.props.twitter}
                              updateSettings={this.handleUpdateTwSettings}
                              cleanData={this.props.cleanData}
                              ref={(input) => this.twSettings = input}/>}

          {this.props.data.settingsCurrentTab == 'twitterCriteria' && this.props.twitter.dataReceivedTipCriteria
          && <TwitterCriteria twitter={this.props.twitter}
                              updateSettings={this.handleUpdateTwCriteria}
                              cleanData={this.props.cleanData}
                              ref={(input) => this.twSettings = input}/>}

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.user, twitter: state.twitter}),
  {
    ...generalActions,
    ...settingsActions,
    ...popupActions,
    ...dashboardActions
  }
)(Settings);