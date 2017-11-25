
import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./paymentSettings.css";
export class PaymentSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
<<<<<<< Updated upstream
        Hello PaymentSettings
=======
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="first_name" className="col-lg-3 control-label">First name:</label>
            <div className="col-lg-4">
              <input  id="first_name" className="form-control" type="text" value="Jane"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="last_name" className="col-lg-3 control-label">Last name:</label>
            <div className="col-lg-8">
              <input  id="last_name" className="form-control" type="text" value="Bishop"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="company" className="col-lg-3 control-label">Company:</label>
            <div className="col-lg-8">
              <input id="company" className="form-control" type="text" value=""/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="position" className="col-lg-3 control-label">Position:</label>
            <div className="col-lg-8">
              <input id="position" className="form-control" type="text" value=""/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="user_email" className="col-lg-3 control-label">Email:</label>
            <div className="col-lg-8">
              <input id="user_email" className="form-control" type="text" value="janesemail@gmail.com"/>
            </div>
          </div>
          
        </form>
>>>>>>> Stashed changes
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(PaymentSettings);