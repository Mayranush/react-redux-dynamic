
import React from 'react';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import "./admin.scss";

export class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
    		<div  className="main-content"><div className="header-section">Admin area</div></div>
    	</div>)
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }

)(Admin);