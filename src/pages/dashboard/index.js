import React from "react";
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/menu/footer";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./dashboard.scss";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, "--------------------------------");
    return (
      <div>
        <Menu changeMessage={this.props.changeMessage}/>

        <div className="main-content">
          <div className="header-section">Dashboard</div>
          <div>
            <div className="bot">
              <div className="bot-info">
                <p className="bot-status active"><span className="dot dotRed"/>Your Tipping bot is not active </p>
                <p className="bot-status"><span className="dot dotGreen"/>Your Tipping bot is active </p>
              </div>
              <br/>
              <div className="bot-btn">
                <button className="btn btn-success dashboard">Activate tipping</button>
                <button className="btn bg-danger dashboard">Stop tipping</button>
              </div>

            </div>

            <div className="wallet">
              <div className="bot-info">
                <p className="bot-status active"><span className="dot dotRed"/>You have 0 Coins in your wallet </p>
                <p className="bot-status"><span className="dot dotGreen"/>You have 356 Coins in your wallet  </p>
              </div>
              <br/>
              <div className="bot-btn">
                <button className="btn btn-success dashboard">Recharge wallet</button>
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