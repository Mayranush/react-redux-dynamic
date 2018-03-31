import React from "react";
import {connect} from "react-redux";
import {dashboardActions, generalActions, settingsActions} from "../../actions/index";
import PropTypes from "prop-types";
import "./dashboard.scss";
import {Link} from "react-router/es6";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleActivateBot = this.activateBot.bind(this);
    this.handleDeactivateBot = this.deactivateBot.bind(this);
  }

  activateBot(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.botPost();
  }



  deactivateBot(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.botPut();
    this.props.changeBotStatus('STOPPED');
    this.props.changeBotStart('');
  }

  static propTypes = {
    botStart: PropTypes.string
  };

  componentDidMount() {
    this.props.botGet();

  }

  render() {
    return (
      <div className="main-content">
        <div className="header-section">Dashboard</div>
        <div>
          <div className="bot">
            <div className="bot-info">
              <p className={this.props.data.botStart == 'STARTED.' ? "bot-status active" : "bot-status"}><span
                className="dot dotGreen"/>You started Tipping bot</p>
              <p
                className={this.props.data.botStart == 'STARTED.' || this.props.data.botStart == 'The bot is running.' ? "bot-status" : "bot-status active"}>
                <span className="yellow">
                  {this.props.data.botStart.indexOf('criteria') > -1 ?
                    <Link to="settings" onClick={() => this.props.changeTabInSettings('twitterCriteria')}>
                      {this.props.data.botStart}
                    </Link> : this.props.data.botStart}
                </span>
              </p>
              <p className={this.props.data.botStatus == 'RUNNING' ? "bot-status" : "bot-status active"}><span
                className="dot dotRed"/>Your Tipping bot is not running </p>
              <p
                className={this.props.data.botStatus == 'RUNNING' && this.props.data.botStart != 'STARTED.' ? "bot-status active" : "bot-status"}>
                <span className="dot dotGreen"/>Your Tipping bot is running </p>
            </div>
            <br/>
            <div className="bot-btn">
              <button className="btn btn-success dashboard bot-btn-sub" onClick={(e) => this.handleActivateBot(e)}>
                Activate tipping
              </button>

              <button className="btn bg-danger dashboard  bot-btn-sub" onClick={(e) => this.handleDeactivateBot(e) }>
                Stop tipping
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.twitter}),
  {
    ...generalActions,
    ...dashboardActions,
    ...settingsActions
  }
)(Dashboard);