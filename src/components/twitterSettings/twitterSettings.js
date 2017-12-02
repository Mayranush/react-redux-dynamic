/**
 * Created by Shushi on 11/14/2017.
 */

import React from "react";
import {projectDataActions} from "../../actions/index";
import "./twitterSettings.scss";
import PropTypes from 'prop-types';

export class TwitterSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    consumerKey: PropTypes.string,
    consumerSecret: PropTypes.string,
    accessToken: PropTypes.string,
    accessTokenSecret: PropTypes.string,
    minFollowers: PropTypes.number,
    tipsPerDay: PropTypes.number,
    tipsLike: PropTypes.bool,
    tipsTweet: PropTypes.bool,
    tipsReTweet: PropTypes.bool,
    tipsFollowers: PropTypes.bool
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
                  <input id="consumerKey" ref="consumerKey" className="form-control" type="text" placeholder={this.props.twitter.consumerKey}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="consumerSecret" className="col-lg-3 control-label tw-crit">Consumer Secret</label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="consumerSecret" ref="consumerSecret" className="form-control" type="text" placeholder={this.props.twitter.consumerSecret}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="accessToken" className="col-lg-3 control-label tw-crit">Access Token</label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="accessToken" ref="accessToken" className="form-control" type="text" placeholder={this.props.twitter.accessToken}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="accessTokenSecret" className="col-lg-3 control-label tw-crit">Access Token
                  Secret</label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="accessTokenSecret" ref="accessTokenSecret" className="form-control" type="text" placeholder={this.props.twitter.accessTokenSecret}/>
                </div>
              </div>
            </div>
            <div className="cube1">
              <br/>
              <h6>Select when to tip coin</h6>

              <hr/>
              <br/>


              <div className="form-group">
                <label htmlFor="minFollowers" className="col-lg-3 control-label tw-crit">Minimum number of
                  followers<span>*</span></label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="minFollowers" ref="minFollowers" className="form-control" type="text" placeholder={this.props.twitter.minFollowers}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tipsPerDay" className="col-lg-3 control-label tw-crit">Max count of tipping<span>*</span></label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="tipsPerDay" ref="tipsPerDay" className="form-control" type="text" placeholder={this.props.twitter.tipsPerDay}/>
                </div>
              </div>

              <div className="checkbox">
                <label><input type="checkbox" ref="tipsLike" defaultChecked={this.props.twitter.tipsLike} /> Like</label>
              </div>
              <div className="checkbox">
                <label><input type="checkbox" ref="tipsTweet" defaultChecked={this.props.twitter.tipsTweet} /> Tweet</label>
              </div>
              <div className="checkbox">
                <label><input type="checkbox" ref="tipsReTweet" defaultChecked={this.props.twitter.tipsReTweet} /> ReTweet</label>
              </div>
              <div className="checkbox">
                <label><input type="checkbox" ref="tipsFollowers" defaultChecked={this.props.twitter.tipsFollowers} /> is Follower</label>
              </div>
            </div>
          </div>
        </form>
        <div className="rect">Need any help? <a className="contact-us" href="">Contact us here</a></div>
        <div className="update-info">
          <button className="btn-warning" onClick={() => this.props.updateSettings()}>Update Twitter Settings</button>
        </div>
      </div>)
  }
}

