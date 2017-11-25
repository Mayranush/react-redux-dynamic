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
<<<<<<< Updated upstream
        Hello MyDetails
=======
        <div><span>Fullsfmkm</span><span>sjvnjvnjn</span></div>
        <div><span>Fullsfmdsnsjdnkm</span><span>sjvnjvnjn</span></div>
        <div><span>Fullm</span><span>sjvnjvnjn</span></div>
>>>>>>> Stashed changes
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(MyDetails);