import React from "react";
import {connect} from "react-redux";
import {adminActions, projectDataActions} from "../../actions/index";
import "./admin.scss";

export class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsersList(1, 10);
  }

  render() {
    return (
      <div>
        <div className="main-content">
          <div className="header-section">Users list</div>
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Twitter username</th>
                <th>Is Active</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Disable</th>
                <th>Enable</th>
              </tr>
              </thead>
              <tbody>

              { this.props.data.usersList.map((item) => {
                return ( <tr key={item.id}>
                  <th scope="row">{item.firstname}</th>
                  <td>{item.lastname}</td>
                  <td>{item.twUsername}</td>
                  <td>{item.isActive && <i className="fa fa-check" aria-hidden="true"></i>}</td>
                  <td>{item.email}</td>
                  <td>{item.createdAt}</td>
                </tr>)
              })
              }

              </tbody>
            </table>
            <p className="log-message">{this.props.data.logMessage}</p>
          </div>

        </div>
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {
    ...projectDataActions,
    ...adminActions
  }
)(Admin);