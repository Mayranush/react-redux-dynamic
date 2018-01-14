
import React from 'react';
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
      <div  className="main-content">
        <div className="header-section">Charts</div>
        <h6>Sample chart</h6>
        <GoogleChart loadCharts="false"/>
      </div>
    )
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }

)(Charts);