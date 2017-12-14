
import React from "react";
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/menu/footer";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import PropTypes from "prop-types";
import "./dashboard.scss";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleActivateBot = this.activateBot.bind(this);
    this.handleDeactivateBot = this.deactivateBot.bind(this);
  }
  activateBot(e) {
    e.stopPropagation();
    e.preventDefault();
      this.props.getData("auth/bot", "post", {},true);

  }
  deactivateBot(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.getData("auth/bot", "put", {},true);
    this.props.changeMessage('twitter', 'botStatus', 'STOPPED');
  }
  static propTypes = {
    botStart: PropTypes.string
  };

  componentDidMount() {
    this.props.getData("auth/bot", "get", {}, true);
  }
  render() {

    return (
      <div>
        <Menu changeMessage={this.props.changeMessage} cleanData={this.props.cleanData}/>

        <div className="main-content">
          <div className="header-section">Dashboard</div>
          <div>
            <div className="bot">
              <div className="bot-info">
                <p className={this.props.data.twitter.botStart == 'STARTED.' ? "bot-status active" : "bot-status"}><span className="dot dotGreen"/>You started Tipping bot</p>
                <p className={this.props.data.twitter.botStart == 'STARTED.' || this.props.data.twitter.botStart == 'The bot is running.' ? "bot-status" : "bot-status active"}><span className="yellow">{this.props.data.twitter.botStart}</span></p>

                <p className={this.props.data.twitter.botStatus == 'RUNNING' ? "bot-status" : "bot-status active"}><span className="dot dotRed"/>Your Tipping bot is not running </p>
                <p className={this.props.data.twitter.botStatus == 'RUNNING' && this.props.data.twitter.botStart != 'STARTED.' ? "bot-status active" : "bot-status"}><span className="dot dotGreen"/>Your Tipping bot is running </p>


              </div>
              <br/>
              <div className="bot-btn">
                <button className="btn btn-success dashboard bot-btn-sub" onClick={(e) => this.handleActivateBot(e)}>Activate tipping</button>

                <button className="btn bg-danger dashboard  bot-btn-sub" onClick={(e) => this.handleDeactivateBot(e) }>Stop tipping</button>
              </div>

            </div>

            <div className="wallet">
              <div className="bot-info">
                <p className="bot-status active"><span className="dot dotRed"/>You have 0 Coins in your wallet </p>
                <p className="bot-status"><span className="dot dotGreen"/>You have 356 Coins in your wallet  </p>
              </div>
              <br/>
              <div className="bot-btn">
                <button className="btn btn-success dashboard  bot-btn-sub">Recharge wallet</button>
              </div>

            </div>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}

)(Dashboard);