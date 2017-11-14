import React from "react";
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/menu/footer";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./settings.scss";
import {MyDetails} from "../../components/myDetails/myDetails";
import {TwitterSettings} from "../../components/twitterSettings/twitterSettings";
import {PaymentSettings} from "../../components/paymentSettings/paymentSettings";

export class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props,"this.props.settingsCurrentTab")
    return (
      <div>
        <Menu />
        <div className="main-content">
          
              <p  onClick={() => this.props.changeTabInSettings('myDetails')}>My details</p>

              <p onClick={() => this.props.changeTabInSettings('twitterSettings')}>Twitter Settings</p>

              <p onClick={() => this.props.changeTabInSettings('paymentSettings')}>Payment details</p>


          {this.props.data.settingsCurrentTab == 'myDetails' && <MyDetails />}
          {this.props.data.settingsCurrentTab == 'twitterSettings' && <TwitterSettings />}
          {this.props.data.settingsCurrentTab == 'paymentSettings' && <PaymentSettings />}

        </div>
        <Footer />
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Settings);