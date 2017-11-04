import React from 'react';
import {Menu} from '../../components/menu/menu';
import {Footer} from '../../components/menu/footer';
import {GoogleChart} from '../../components/chart/googleChart';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import "./charts.scss";

export class Charts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu />
        <div  className="main-content">
          charts
          <GoogleChart />
        </div>
        <Footer />
      </div>)
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Charts);