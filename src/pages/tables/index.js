import React from 'react';
import {Menu} from '../../components/menu/menu';
import {Footer} from '../../components/menu/footer';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import "./tables.scss";

export class Tables extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
    		<Menu />
    		<div  className="main-content">
          <div className="header-section">Tables</div>
          Here will be reports with table view</div>
        <Footer />
    	</div>)
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Tables);