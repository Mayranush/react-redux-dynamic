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
  }

  updateSettings(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(this.props, "......................before")
    let objDetails = {
      consumerKey: this.refs.consumerKey.value,
      consumerSecret: this.refs.consumerSecret.value,
      accessToken: this.refs.accessToken.value,
      accessTokenSecret: this.refs.accessTokenSecret.value
    };
    let objCrit = {
      minFollowers: this.refs.minFollowers.value,
      tipsPerDay: this.refs.tipsPerDay.value,
      tipsLike: this.refs.tipsLike.value,
      tipsTweet: this.refs.tipsTweet.value,
      tipsReTweet: this.refs.tipsReTweet.value,
      tipsFollowers: this.refs.tipsFollowers.value
    };


    this.props.prop.changeMessage('twitter', 'consumerKey', objDetails.consumerKey);
    this.props.prop.changeMessage('twitter', 'consumerSecret', objDetails.consumerSecret);
    this.props.prop.changeMessage('twitter', 'accessToken', objDetails.accessToken);
    this.props.prop.changeMessage('twitter', 'accessTokenSecret', objDetails.accessTokenSecret);
    this.props.prop.changeMessage('twitter', 'minFollowers', objCrit.minFollowers);
    this.props.prop.changeMessage('twitter', 'tipsPerDay', objCrit.tipsPerDay);
    this.props.prop.changeMessage('twitter', 'tipsLike', objCrit.tipsLike);
    this.props.prop.changeMessage('twitter', 'tipsTweet', objCrit.tipsTweet);
    this.props.prop.changeMessage('twitter', 'tipsReTweet', objCrit.tipsReTweet);
    this.props.prop.changeMessage('twitter', 'tipsFollowers', objCrit.tipsFollowers);
    if (objDetails.consumerKey !== '' || objDetails.consumerSecret !== '' || objDetails.accessToken !== '' || objDetails.accessTokenSecret !== '') {
      this.props.prop.getData("auth/tw-api-details", "post", objDetails, true);
    }
    if (objDetails.minFollowers !== '' || objDetails.tipsPerDay !== '' || objDetails.tipsLike !== '' || objDetails.tipsTweet !== '' || objDetails.tipsReTweet !== '' || objDetails.tipsFollowers !== '') {
      this.props.prop.getData("auth/tw-tip-criteria", "post", objCrit, true);
    }


    console.log(this.props, "......................after")
  }

  render() {
    return (
      <div>

        <form className="form-horizontal" role="form">
          <div className="cube">
          <div className="cube1">

          <br/>
          <h6>Twitter Api Details</h6>

          <hr/>
          <br/>
          <div className="form-group">
            <label htmlFor="consumerKey" className="col-lg-3 control-label tw-crit">Consumer Key</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="consumerKey" ref="consumerKey" className="form-control" type="text"
                     placeholder={this.props.prop.data.twitter.consumerKey}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="consumerSecret" className="col-lg-3 control-label tw-crit">Consumer Secret</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="consumerSecret" ref="consumerSecret" className="form-control" type="text"
                     placeholder={this.props.prop.data.twitter.consumerSecret}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="accessToken" className="col-lg-3 control-label tw-crit">Access Token</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="accessToken" ref="accessToken" className="form-control" type="text"
                     placeholder={this.props.prop.data.twitter.accessToken}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="accessTokenSecret" className="col-lg-3 control-label tw-crit">Access Token Secret</label>
            <div className="col-lg-3 form-group-values tw-crit">
              <input id="accessTokenSecret" ref="accessTokenSecret" className="form-control" type="text"
                     placeholder={this.props.prop.data.twitter.accessTokenSecret}/>
            </div>
          </div>
          </div>
          <div className="cube1">
<br/>
          <h6>Select when to tip coin</h6>

          <hr/>
          <br/>


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

          <div className="checkbox">
            <label><input type="checkbox" ref="tipsLike" value=""/> Like</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" ref="tipsTweet" value=""/> Tweet</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" ref="tipsReTweet" value=""/> ReTweet</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" ref="tipsFollowers" value=""/> is Follower</label>
          </div>
          </div>
          </div>
        </form>
        <div className="rect">Need any help? <a className="contact-us" href="">Contact us here</a></div>
        <div className="update-info">
          <button className="btn-warning" onClick={(e) => this.handleUpdateSettings(e)}>Update Twitter Settings</button>
        </div>
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(TwitterSettings);