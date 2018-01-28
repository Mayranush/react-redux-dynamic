import React from "react";
import {connect} from "react-redux";
import {projectDataActions, checkActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./activate.scss";

export class Check extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let obj = {};
		if (window.location.search.charAt(0) === '?') {
 			let vid = window.location.search.substr(1);
 			vid = vid.split("=");
 			obj[vid[0]] = vid[1];
		}
		this.props.activateAccount(obj);
	}

	render() {
		return (
			<div></div>
		)
	}
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
    {
        ...projectDataActions,
        ...checkActions
    }
)(Check);
