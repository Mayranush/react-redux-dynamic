import React from 'react';
import {Menu} from '../../components/menu/menu';
import {Footer} from '../../components/menu/footer';
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
    		<Menu />
    		<div  className="main-content">Admin</div>
        <Footer />
    	</div>)
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Admin);