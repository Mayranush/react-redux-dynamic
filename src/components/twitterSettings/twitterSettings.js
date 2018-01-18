/**
 * Created by Shushi on 11/14/2017.
 */

import React from "react";
import {projectDataActions} from "../../actions/index";
import "./twitterSettings.scss";
import PropTypes from "prop-types";
import {Link} from "react-router/es6";

export class TwitterSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    consumerKey: PropTypes.string,
    consumerSecret: PropTypes.string,
    accessToken: PropTypes.string,
    accessTokenSecret: PropTypes.string,

  };

  render() {

    return (
      <div>

        <form className="form-horizontal" role="form">
          <div className="cube">
            <div className="cube1">
              <h6 className={this.props.twitter.botStatus == 'RUNNING' ?"warning-stop-bot-active":"warning-stop-bot"}>Please disable the bot from running to update these details<br/></h6>


              <div className="form-group tw-set">
                <label htmlFor="consumerKey" className="col-lg-3 control-label tw-set">Consumer Key</label>
                <div className="col-lg-3 form-group-values tw-set">
                  <input id="consumerKey" ref="consumerKey" className="form-control" type="text"
                         disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                         defaultValue={ this.props.twitter.consumerKey }/>
                </div>
              </div>
              <div className="form-group tw-set">
                <label htmlFor="consumerSecret" className="col-lg-3 control-label tw-set">Consumer Secret</label>
                <div className="col-lg-3 form-group-values tw-set">
                  <input id="consumerSecret" ref="consumerSecret" className="form-control" type="text"
                         disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                         defaultValue={this.props.twitter.consumerSecret }/>
                </div>
              </div>
              <div className="form-group tw-set">
                <label htmlFor="accessToken" className="col-lg-3 control-label tw-set">Access Token</label>
                <div className="col-lg-3 form-group-values tw-set">
                  <input id="accessToken" ref="accessToken" className="form-control" type="text"
                         disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                         defaultValue={ this.props.twitter.accessToken }/>
                </div>
              </div>
              <div className="form-group tw-set">
                <label htmlFor="accessTokenSecret" className="col-lg-3 control-label tw-set">Access Token
                  Secret</label>
                <div className="col-lg-3 form-group-values tw-set">
                  <input id="accessTokenSecret" ref="accessTokenSecret" className="form-control" type="text"
                         disabled={ this.props.twitter.botStatus == 'RUNNING' ? true : false }
                         defaultValue={this.props.twitter.accessTokenSecret}/>
                </div>
              </div>
            </div>

          </div>
        </form>
        <div className="rect">Need any help? <Link className="contact-us" to="">Contact us here</Link></div>
        <div className="update-info">
          <button className=" btn btn-warning settings" onClick={() => this.props.updateSettings()}>Update Twitter Api
            Settings
          </button>
        </div>
      </div>)
  }
}
