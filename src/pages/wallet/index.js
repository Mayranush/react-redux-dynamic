import React from "react";
import {connect} from "react-redux";
import {paymentActions, popupActions, projectDataActions} from "../../actions/index";
import {Pagination} from "../../components/pagination/pagination";
import "./wallet.scss";
import PropTypes from "prop-types";
import {Web3Provider} from "react-web3";
import {Metamask} from "../../images/metamask.png";

let isTransationInProgress = true;

export class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handlePay = this.pay.bind(this);
    this.handleShowpopup = this.showPopup.bind(this);
    this.currentPage = {
      value: 1
    };
    this.itemsInEachPage = 5;
    this.clickFunction = this.clickFunction.bind(this);
  }

  clickFunction(item) {
    this.props.getTransactionsList(item - 1, this.itemsInEachPage);
  }

  pay(e) {
    e.stopPropagation();
    e.preventDefault();
    var ethVal = web3.toWei(this.textInput.value, 'ether');
    var ethHex = ethVal.toString(16);

    var gasVal = web3.toWei(25, 'gwei');
    var gasHex = gasVal.toString(16);

    let self = this;
    web3.eth.sendTransaction(
      {
        from: web3.eth.accounts[0],
        to: '0x7dc41dc80f0e17b62aa8807507f20d0d68728fb9',
        value: ethHex,
        gas: 53000,
        gasPrice: gasHex
      },
      function (error, hash) {
        if (error) {
          self.handleShowpopup(error)
        }
        if (hash) {
          self.handleShowpopup("Your transaction has been submitted! It may take a while for completion.");
          self.textInput.value = "";
          self.addTransaction(hash);
        }
      });
  }

  addTransaction(hash) {
    let self = this;
    web3.eth.getTransaction(hash, function (error, transaction) {
      let transactionReceipt = {};
      transactionReceipt.fromE = transaction.from;
      transactionReceipt.gas = transaction.gas;
      transactionReceipt.nonce = transaction.nonce;
      transactionReceipt.valueE = parseInt(transaction.v, 16);
      transactionReceipt.input = transaction.input;
      transactionReceipt.toE = transaction.to;
      transactionReceipt.hashE = hash;
      self.props.addNewTransaction(transactionReceipt);
      self.getReceipt(hash);
    });
  }

  getReceipt(hash) {
    self = this;
    let test = setInterval(() => {
      web3.eth.getTransactionReceipt(hash, function (error, receipt) {
        if (receipt) {
          clearInterval(test);
          self.getPendingTransactions();
        }
      });
    }, 120000);
  }

  getPendingTransactions() {
//TODO error is occuring
    this.props.getPendingTransactionsList();
    self = this;
    setTimeout(() => {
      self.props.getTransactionsList(0, self.itemsInEachPage);
      self.props.getBalance();
    }, 10000);
  }


  showPopup(message) {
    this.props.changePopup(message, true, false, "");
  }


  static propTypes = {
    changePopup: PropTypes.func
  };


  componentDidMount() {

    this.props.getPendingTransactionsList();
    this.props.getTransactionsList(0, this.itemsInEachPage);
    this.props.getBalance();
  }

  render() {
    return (
      <div className="main-content">
        <div className="header-section">My wallet</div>
        <div>
          <Web3Provider>
            <div>
              <div className="wallet">
                <div className="bot-info">
                  <p className="bot-status active">You have <br/> {this.props.data.balance} <i
                    className="fab fa-ethereum 7x green"></i>
                    <br/> in your wallet </p>
                </div>

                <div><input type="number" ref={(input) => {
                  this.textInput = input;
                }} className="form-control bot-info"
                            placeholder="Input Ether count to fill your account"/></div>
                <br/>
                <div className="bot-btn">

                  <img src={require('../../images/metamask.png')} onClick={(e) => this.handlePay(e) }
                       className="metamask-btn"/>
                </div>
              </div>
              <div className="wallet">
                <div className="bot-info">
                  <span className="bot-status active">Monthly Subscription
                    <br/>
                    <br/>
                    <br/>
<hr/>
                    {this.props.data.monthlyFee
                      ? <span className="green">Your account is active. View subscription <span onClick={(e) => this.handlePay(e)}>history.</span> </span>
                      : <button className="btn btn-success">Activate</button>}
                  </span>
                </div>
              </div>
            </div>
          </Web3Provider>
          <h4>Pending Transactions </h4>
          <div className="table-body">
            <table className="table">
              <thead className="thead-inverse">
              <tr>
                <th>Transaction Hash</th>
                <th>From</th>
                <th>To</th>
                <th>Value</th>
                <th>Gas</th>
                <th>Nonce</th>
                <th>Input</th>
              </tr>
              </thead>
              <tbody>
              {this.props.data.pendingTransaction.length != 0 && this.props.data.pendingTransaction.map((item) => {
                return ( <tr key={item.id}>
                  <th scope="row" title={item.hashE}>{item.hashE}</th>
                  <td title={item.fromE}>{item.fromE}</td>
                  <td title={item.toE}>{item.toE}</td>
                  <td>{item.valueE} $</td>
                  <td>{item.gas}</td>
                  <td>{item.nonce}</td>
                  <td>{item.input}</td>
                </tr>)
              })
              }
              </tbody>
            </table>
            <p className="log-message">{this.props.data.logMessage}</p>
          </div>
          <br/>
          <h4>Transaction history</h4>
          <div className="table-body">

            <table className="table">

              <thead className="thead-inverse">
              <tr>
                <th>Transaction Hash</th>
                <th>Block</th>
                <th>Block Hash</th>
                <th>From</th>
                <th>To</th>
                <th>Value</th>
                <th>Gas</th>
                <th>Gas Used</th>
                <th>Nonce</th>
                <th>Transaction Index</th>
                <th>Input</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
              {this.props.data.transactions.length != 0 && this.props.data.transactions.map((item) => {
                return ( <tr key={item.id}>
                  <th scope="row" title={item.hashE}>{item.hashE}</th>
                  <td title={item.blockNumber}>{item.blockNumber}</td>
                  <td title={item.blockHash}>{item.blockHash}</td>
                  <td title={item.fromE}>{item.fromE}</td>
                  <td title={item.toE}>{item.toE}</td>
                  <td>{item.valueE}</td>
                  <td>{item.gas}</td>
                  <td>{item.gasUsed}</td>
                  <td>{item.nonce}</td>
                  <td>{item.transactionIndex}</td>
                  <td>{item.input}</td>
                  {item.statusE === 1 ? <td className="green">success</td> : (item.statusE === 1 ?
                    <td className="red">failed</td> : <td>pending</td>)}
                </tr>)
              })
              }
              </tbody>
            </table>
            <p className="log-message">{this.props.data.logMessage}</p>
          </div>
          <div className="pagination-block">

            {this.props.data.count > 1 &&
            <Pagination maxPageCount={Math.ceil(this.props.data.count / this.itemsInEachPage)}
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