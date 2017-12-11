/**
 * Created by Shushi on 11/14/2017.
 */

import React from "react";
import {projectDataActions} from "../../actions/index";
import "./twitterSettings.scss";
import PropTypes from "prop-types";

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
    tipsPerDayPerUser: PropTypes.number,
    coinAmount: PropTypes.number,
    coinType: PropTypes.string,
    hashtags: PropTypes.string,
    // tipsLike: PropTypes.bool,
    tipsTweet: PropTypes.bool,
    tipsReTweet: PropTypes.bool,
    tipsFollowers: PropTypes.bool
  };

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
                         defaultValue={this.props.twitter.consumerKey ? this.props.twitter.consumerKey : " "}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="consumerSecret" className="col-lg-3 control-label tw-crit">Consumer Secret</label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="consumerSecret" ref="consumerSecret" className="form-control" type="text"
                         defaultValue={this.props.twitter.consumerSecret ? this.props.twitter.consumerSecret : " "}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="accessToken" className="col-lg-3 control-label tw-crit">Access Token</label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="accessToken" ref="accessToken" className="form-control" type="text"
                         defaultValue={this.props.twitter.accessToken ? this.props.twitter.accessToken : " "}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="accessTokenSecret" className="col-lg-3 control-label tw-crit">Access Token
                  Secret</label>
                <div className="col-lg-3 form-group-values tw-crit">
                  <input id="accessTokenSecret" ref="accessTokenSecret" className="form-control" type="text"
                         defaultValue={this.props.twitter.accessTokenSecret ? this.props.twitter.accessTokenSecret : " "}/>
                </div>
              </div>
            </div>
            <div className="cube2">
              <br/>
              <h6>Select when to tip coin</h6>

              <hr/>
              <br/>

              <div>
                <div className="subCube1">
                  <div className="form-group">
                    <label htmlFor="minFollowers" className="col-lg-3 control-label tw-crit">Minimum number of
                      followers</label>
                    <div className="col-lg-3 form-group-values tw-crit">
                      <input id="minFollowers" ref="minFollowers" className="form-control" type="text"
                             defaultValue={this.props.twitter.minFollowers ? this.props.twitter.minFollowers : " "}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tipsPerDay" className="col-lg-3 control-label tw-crit">Max count of tipping per
                      day</label>
                    <div className="col-lg-3 form-group-values tw-crit">
                      <input id="tipsPerDay" ref="tipsPerDay" className="form-control" type="text"
                             defaultValue={this.props.twitter.tipsPerDay}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tipsPerDayPerUser" className="col-lg-3 control-label tw-crit">Max count of tipping
                      per
                      day per user</label>
                    <div className="col-lg-3 form-group-values tw-crit">
                      <input id="tipsPerDayPerUser" ref="tipsPerDayPerUser" className="form-control" type="text"
                             defaultValue={this.props.twitter.tipsPerDayPerUser}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="coinAmount" className="col-lg-3 control-label tw-crit">Coin amount per
                      tipping</label>
                    <div className="col-lg-3 form-group-values tw-crit">
                      <input id="coinAmount" ref="coinAmount" className="form-control" type="text"
                             defaultValue={this.props.twitter.coinAmount}/>
                    </div>
                  </div>
                </div>
                <div className="subCube1">
                  <div className="form-group">
                    <label htmlFor="coinType" className="col-lg-3 control-label tw-crit">Coin type</label>
                    <div className="col-lg-3 form-group-values tw-crit">
                      <input id="coinType" ref="coinType" className="form-control" type="text"
                             defaultValue={this.props.twitter.coinType}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="hashtags" className="col-lg-3 control-label tw-crit">Twitter users to be
                      tipped</label>
                    <div className="col-lg-3 form-group-values tw-crit">
                      <input id="hashtags" ref="hashtags" className="form-control" type="text"
                             defaultValue={this.props.twitter.hashtags}/>
                    </div>
                  </div>
                  {/*<div className="checkbox">*/}
                  {/*<label><input type="checkbox" ref="tipsLike" defaultChecked={this.props.twitter.tipsLike} /> Like</label>*/}
                  {/*</div>*/}
                  <div className="checkbox">
                    <label><input type="checkbox" ref="tipsTweet" defaultChecked={this.props.twitter.tipsTweet}/>
                      Tweet</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" ref="tipsReTweet" defaultChecked={this.props.twitter.tipsReTweet}/>
                      ReTweet</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" ref="tipsFollowers"
                                  defaultChecked={this.props.twitter.tipsFollowers}/>
                      is
                      Follower</label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form>
        <div className="rect">Need any help? <a className="contact-us" href="">Contact us here</a></div>
        <div className="update-info">
          <button className=" btn btn-warning settings" onClick={() => this.props.updateSettings()}>Update Twitter
            Settings
          </button>
        </div>
      </div>)
  }
}

