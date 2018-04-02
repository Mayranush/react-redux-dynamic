import React from "react";
import {connect} from "react-redux";
import {paymentActions, popupActions, projectDataActions} from "../../actions/index";
import {Pagination} from "../../components/pagination/pagination";
import "./subscription.scss";
import PropTypes from "prop-types";


export class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowpopup = this.showPopup.bind(this);
    this.handleActivate = this.activateSubscription.bind(this);
    this.currentPage = {
      value: 1
    };
    this.itemsInEachPage = 5;
    this.clickFunction = this.clickFunction.bind(this);
  }

  activateSubscription() {
    this.props.payMonthlyFee();
    self = this;
    setTimeout(function () {
      self.props.getMonthlyFee(0, self.itemsInEachPage);
    }, 3000)
  }

  clickFunction(item) {
    this.props.getMonthlyFee(item - 1, this.itemsInEachPage);
  }

  showPopup(message) {
    this.props.changePopup(message, true, false, "");
  }


  static propTypes = {
    changePopup: PropTypes.func
  };


  componentDidMount() {
    this.props.getMonthlyFee(0, this.itemsInEachPage);
    this.props.getBalance();
  }

  render() {
    return (
      <div className="main-content">
        <div className="header-section">My subscriptions</div>
        <div>
          <div>
            <div className="subscription">
              <div className="subscription-info">
                  <span className="subscription-status">Monthly Subscription

                    <hr/>
                    {this.props.data.monthlyFee
                      ? <span className="green">Monthly fee is paid.</span>
                      : <button className="btn btn-success" onClick={(e) => this.handleActivate(e)}>Pay monthly
                        fee</button>}
                  </span>
              </div>
            </div>
          </div>

          <br/>
          <h4>Subscription history</h4>
          <div className="sb table-body">
            <table className="sb table">
              <thead className="sb thead-inverse">
              <tr>
                <th>Fee</th>
                <th>Paid At</th>
              </tr>
              </thead>
              <tbody>
              {this.props.data.subsriptionHistory.length != 0 && this.props.data.subsriptionHistory.map((item) => {
                return ( <tr key={item.id}>
                  <th scope="row">{item.val}</th>
                  <td >{item.paidDate}</td>
                </tr>)
              })
              }
              </tbody>
            </table>
            <p className="sb-log-message">{this.props.data.subsriptionHistoryMessage}</p>
          </div>
          <div className="pagination-block">

            {this.props.data.subsriptionHistoryCount > 1 &&
            <Pagination maxPageCount={Math.ceil(this.props.data.subsriptionHistoryCount / this.itemsInEachPage)}
                        currentPage={this.currentPage} clickFunction={this.clickFunction}/>}
          </div>

        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.wallet}),
  {
    ...projectDataActions,
    ...paymentActions,
    ...popupActions
  }
)(Wallet);