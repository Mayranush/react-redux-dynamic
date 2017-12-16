
import React from "react";
import {projectDataActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./popup.scss";
import PropTypes from "prop-types";

export class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="general-div">
        <div className="text-block">
          <p>{this.props.text}</p>
          <div className="close-button" onClick={() => this.props.closePopup()}>ok</div>
        </div>
      </div>
    )
  }
}

