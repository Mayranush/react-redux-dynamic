/**
 * Created by Shushi on 11/14/2017.
 */
import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";

export class MyDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello MyDetails
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(MyDetails);