/**
 * Created by Shushi on 11/14/2017.
 */

import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";

export class TwitterSettings extends React.Component {
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
)(TwitterSettings);