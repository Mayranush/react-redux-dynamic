import React from "react";
import {Menu} from "../../components/menu/menu";
import {Footer} from "../../components/menu/footer";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./tables.scss";

export class Tables extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData("auth/tw-tip-logs", "get", {}, true);
  }

  render() {
    return (
      <div>
        <Menu changeMessage={this.props.changeMessage} emptyDataFunc={this.props.emptyDataFunc}/>

        <div className="main-content">
          <div className="header-section">Tables</div>
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th>Tweet id</th>
                <th>Tipped Twitter username</th>
                <th>Tweet text</th>
                <th>ReTweet text</th>
                <th>Created at</th>
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
                  <td>{item.twTime}</td>
                </tr>)
              })
              }

              </tbody>
            </table>
            <p className="log-message">{this.props.data.logMessage}</p>
          </div>

        </div>
        <Footer />
      </div>)
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions}
)(Tables);