import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./successPage.scss";


export class Register extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props,"this.propsthis.propsthis.propsthis.propsthis.props")
    return (
      <div className="success">
        <span>{this.props.data.message}</span>
        {this.props.data.hrefToSignIn && <Link to="login">here</Link>}
      </div>
    )
  }
}

export default connect(
  state => ({data: state.success}),
  {...projectDataActions}
)(Register);