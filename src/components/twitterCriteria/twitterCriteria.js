/**
 * Created by Shushi on 11/14/2017.
 */

import React from "react";
import {projectDataActions} from "../../actions/index";
import "./twitterCriteria.scss";
import PropTypes from "prop-types";
import {Link} from "react-router/es6";

export class TwitterCriteria extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.refs.minFollowers.value.addEventListener("change",function () {
  //     console.log(value,"value")
  //   })
  // }

  static propTypes = {
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

            <div className="cube2">

              <div>

                <div className="form-group tw-crit ">
                  <label htmlFor="minFollowers" className="col-lg-3 control-label tw-crit">Minimum number of
                    followers
                    <div className="description">(will tip only those who has more than input value)</div>
                  </label>

                  <div className="col-lg-3 form-group-values tw-crit">
                    <input type="number" id="minFollowers" ref="minFollowers" className="form-control"
                           disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                           defaultValue={this.props.twitter.minFollowers}/>
                  </div>
                </div>
                <div className="form-group tw-crit ">
                  <label htmlFor="tipsPerDay" className="col-lg-3 control-label tw-crit">Max count of tipping per
                    day
                    <div className="description">(will tip mentioned count per day)</div>
                  </label>

                  <div className="col-lg-3 form-group-values tw-crit">
                    <input id="tipsPerDay" ref="tipsPerDay" className="form-control" type="number"
                           disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                           defaultValue={this.props.twitter.tipsPerDay}/>
                  </div>
                </div>
                <div className="form-group tw-crit ">
                  <label htmlFor="tipsPerDayPerUser" className="col-lg-3 control-label tw-crit">Max count of tipping
                    per day per user
                    <div className="description">(will tip mentioned count per day per user)</div>
                  </label>
                  <div className="col-lg-3 form-group-values tw-crit">
                    <input id="tipsPerDayPerUser" ref="tipsPerDayPerUser" className="form-control" type="number"
                           disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                           defaultValue={this.props.twitter.tipsPerDayPerUser}/>
                  </div>
                </div>
                <div className="form-group tw-crit ">
                  <label htmlFor="coinAmount" className="col-lg-3 control-label tw-crit">Coin amount per
                    tipping
                    <div className="description">(will tip mentioned amount in every tipping)</div>
                  </label>
                  <div className="col-lg-3 form-group-values tw-crit">
                    <input id="coinAmount" ref="coinAmount" className="form-control" type="number"
                           disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                           defaultValue={this.props.twitter.coinAmount}/>
                  </div>
                </div>

                <div className="form-group tw-crit ">
                  <label htmlFor="coinType" className="col-lg-3 control-label tw-crit">Coin type
                    <div className="description">(your coin name)</div>
                  </label>
                  <div className="col-lg-3 form-group-values tw-crit">
                    <input id="coinType" ref="coinType" className="form-control" type="text"
                           disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                           defaultValue={this.props.twitter.coinType}/>
                  </div>
                </div>
                <div className="form-group tw-crit ">
                  <label htmlFor="hashtags" className="col-lg-3 control-label tw-crit">Twitter users to be
                    tipped
                    <div className="description">(will tip mentioned Twitter acccounts)</div>
                  </label>
                  <div className="col-lg-3 form-group-values tw-crit">
                    <input id="hashtags" ref="hashtags" className="form-control" type="text"
                           disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                           defaultValue={this.props.twitter.hashtags}/>
                  </div>
                </div>
                {/*<div className="checkbox">*/}
                {/*<label><input type="checkbox" ref="tipsLike" defaultChecked={this.props.twitter.tipsLike} /> Like</label>*/}
                {/*</div>*/}
                <div className="checkbox tw-crit ">
                  <label><input type="checkbox" ref="tipsTweet"
                                disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                                defaultChecked={this.props.twitter.tipsTweet}/><span>  </span>
                    Tweet
                    <div className="description">(tips to tweets)</div>
                  </label>
                </div>
                <div className="checkbox tw-crit">
                  <label><input type="checkbox" ref="tipsReTweet"
                                disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                                defaultChecked={this.props.twitter.tipsReTweet}/><span>  </span>
                    ReTweet
                    <div className="description">(tips to reTweets)</div>
                  </label>
                </div>
                <div className="checkbox tw-crit">
                  <label><input type="checkbox" ref="tipsFollowers"
                                disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                                defaultChecked={this.props.twitter.tipsFollowers}/><span>  </span>
                    is Follower
                    <div className="description">(will tip if Twitter acount is follower)</div>
                  </label>
                </div>

              </div>

            </div>
          </div>
        </form>
        <div className="rect">Need any help? <Link className="contact-us" to="">Contact us here</Link></div>
        <div className="update-info">
          <button className=" btn btn-warning settings" onClick={() => this.props.updateSettings()}>Update Twitter
            Criterias
          </button>
        </div>
      </div>)
  }
}


