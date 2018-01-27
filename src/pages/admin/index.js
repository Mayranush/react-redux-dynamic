import React from "react";
import {connect} from "react-redux";
import {adminActions, projectDataActions} from "../../actions/index";
import "./admin.scss";

export class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeActive = this.changeActive.bind(this);
  }

  changeActive(item) {

    if (item.isActive) {
      this.props.disableUser(item.id);
    } else {
      this.props.enableUser(item.id);
    }
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
                <th>Disable/Enable</th>
              </tr>
              </thead>
              <tbody>

              { this.props.data.usersList.map((item) => {
                return ( <tr key={item.id}>
                  <th scope="row">{item.firstname}</th>
                  <td>{item.lastname}</td>
                  <td>{item.twUsername}</td>
                  <td>{item.isActive && <i className="fa fa-check fa_custom fa-2x" aria-hidden="true"></i>}</td>
                  <td>{item.email}</td>
                  <td>{item.createdAt}</td>
                  <td className="disable-enable" onClick={() => this.handleChangeActive(item) }>
                    {item.isActive && <i className="fa fa-toggle-on fa_custom fa-3x" aria-hidden="true"></i>}
                    {!item.isActive && <i className="fa fa-toggle-off fa_custom fa-3x" aria-hidden="true"></i>}
                  </td>
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