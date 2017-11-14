
import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";

export class PaymentSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Shushan
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(PaymentSettings);