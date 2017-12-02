import React from 'react';
import {Menu} from '../../components/menu/menu';
import {Footer} from '../../components/menu/footer';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import "./dashboard.scss";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props,"--------------------------------");
    return (
      <div>
        <Menu changeMessage={this.props.changeMessage}/>

        <div  className="main-content"><div className="header-section">Dashboard</div><h1>Coming Soon</h1></div>
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Dashboard);