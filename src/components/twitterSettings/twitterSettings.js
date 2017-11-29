/**
 * Created by Shushi on 11/14/2017.
 */

import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./twitterSettings.scss";

export class TwitterSettings extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdateSettings = this.updateSettings.bind(this);
    console.log(this.props,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  }

  updateSettings(e) {
    e.stopPropagation();
    e.preventDefault();

    let obj = {
      consumerKey: this.refs.consumerKey.value,
      consumerSecret: this.refs.consumerSecret.value,
      accessToken: this.refs.accessToken.value,
      accessTokenSecret: this.refs.accessTokenSecret.value,
      minFollowers: this.refs.minFollowers.value,
      tipsPerDay: this.refs.tipsPerDay.value,
      tipsLike: this.refs.tipsLike.value,
      tipsTweet: this.refs.tipsTweet.value
    };
    
    this.props.changeMessage('twitter', 'consumerKey', obj.consumerKey);
    this.props.changeMessage('twitter', 'consumerSecret', obj.consumerSecret);
    this.props.changeMessage('twitter', 'accessToken', obj.accessToken);
    this.props.changeMessage('twitter', 'accessTokenSecret', obj.accessTokenSecret);
    this.props.changeMessage('twitter', 'minFollowers', obj.minFollowers);
    this.props.changeMessage('twitter', 'tipsPerDay', obj.tipsPerDay);
    this.props.changeMessage('twitter', 'tipsLike', obj.tipsLike);
    this.props.changeMessage('twitter', 'tipsTweet', obj.tipsTweet);

    this.props.getData("auth/settings", "post", obj, true);
  }

  render() {
    return (
      <div>

        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="consumerKey" className="col-lg-3 control-label tw-crit">Consumer Key</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="consumerKey" ref="consumerKey" className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="consumerSecret" className="col-lg-3 control-label tw-crit">Consumer Secret</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="consumerSecret" ref="consumerSecret" className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="accessToken" className="col-lg-3 control-label tw-crit">Access Token</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="accessToken" ref="accessToken" className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="accessTokenSecret" className="col-lg-3 control-label tw-crit">Access Token Secret</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="accessTokenSecret" ref="accessTokenSecret" className="form-control" type="text"/>
            </div>
          </div>


          <div className="form-group">
            <label htmlFor="minFollowers" className="col-lg-3 control-label tw-crit">Minimum number of followers</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="minFollowers" ref="minFollowers" className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="tipsPerDay" className="col-lg-3 control-label tw-crit">Max count of tipping</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="tipsPerDay" ref="tipsPerDay" className="form-control" type="text"/>
            </div>
          </div>

          <hr/>
          <h6>Select when to tip coin</h6>
          <div className="checkbox">
            <label><input type="checkbox" ref="tipsLike" value=""/>Like</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" ref="tipsTweet" value=""/>Tweet</label>
          </div>
        </form>
        <div className="rect">Need any help? <a className="contact-us" href="">Contact us here</a></div>
        <div className="update-info">
          <button className="btn-warning" onClick={(e) => this.handleUpdateSettings(e)}>Update Settings</button>
        </div>
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(TwitterSettings);