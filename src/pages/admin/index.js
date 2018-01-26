
import React from 'react';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import "./admin.scss";

export class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
    		<div  className="main-content"><div className="header-section"><div className="table-body">
          <table className="table">
            <thead className="thead-inverse">
            <tr>
              <th data-checkbox="true"></th>
              <th>User full name</th>
              <th>username</th>
              <th>Tweet text</th>
              <th>ReTweet text</th>
              <th>Tweet time</th>
            </tr>
            </thead>
            <tbody>
            { this.props.data.log.map((item) => {
              return ( <tr key={item.tweetId}>
                <th scope="row">{item.tweetId}</th>
                <td>{item.twUserName}</td>
                <td>{item.tweetText}</td>
                <td>{item.reTweetText}</td>
                <td>{item.createdAt}</td>
              </tr>)
            })
            }

            </tbody>
          </table>
          <p className="log-message">{this.props.data.logMessage}</p>
        </div></div></div>
    	</div>)
  }
}

export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }

)(Admin);