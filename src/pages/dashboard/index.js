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
    return (
      <div>
        <Menu />
        <div  className="main-content">Dashboard</div>
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Dashboard);