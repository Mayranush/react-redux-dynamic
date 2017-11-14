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
    this.currentTab = 'myDetails';
    //this.changeTab = this.changeTab.bind(this);
  }
changeTab(tab) {
    console.log("ggggggg");
 this.currentTab = tab;
}
  render() {
    return (
      <div>
        <Menu />
        <div className="main-content">
          <div className="card-header">
            <h4 className="register">Settings</h4>
          </div>

              <p className="nav-link active" onClick={this.changeTab('myDetails')}>My details</p>

              <p className="nav-link" onClick={this.changeTab('twitterSettings')}>Twitter Settings</p>

              <p className="nav-link" onClick={this.changeTab('paymentSettings')}>Payment details</p>


          {this.currentTab === 'myDetails' && <MyDetails />}
          {this.currentTab === 'twitterSettings' && <TwitterSettings />}
          {this.currentTab === 'paymentSettings' && <PaymentSettings />}

        </div>
        <Footer />
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Settings);