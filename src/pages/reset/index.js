import React from "react";
import {connect} from "react-redux";
import {projectDataActions, checkActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./reset.scss";

export class Check extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let vid1 = '';
		if (window.location.search.charAt(0) === '?') {
 			let vid = window.location.search.substr(1);
 			vid = vid.split("=");
 			vid1 = vid[1];
		}
		this.props.check(vid1);
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
