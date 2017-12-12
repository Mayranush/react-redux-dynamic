import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./successPage.scss";


export class Register extends React.Component {
  constructor(props) {
    super(props);

  }








  render() {
    return (
      <div className="success">You have been successfully registered</div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Register);