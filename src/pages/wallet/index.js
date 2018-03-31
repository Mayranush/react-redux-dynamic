import React from "react";
import {connect} from "react-redux";
import {paymentActions, popupActions, projectDataActions} from "../../actions/index";
import "./wallet.scss";
import PropTypes from "prop-types";
import {Web3Provider} from "react-web3";


let isTransationInProgress = true;

export class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handlePay = this.pay.bind(this);
    this.handleShowpopup = this.showPopup.bind(this);
    this.handleTransactionSubmited = this.transactionSubmited.bind(this);
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
        console.log(hash);
        if (error) {
          self.handleShowpopup(error)
        }
        if (hash) {
          console.log(hash);
          self.getReceipt(hash);
        }
      });
  }

  getReceipt(hash) {
    self = this;
    let test = setInterval(() => {
      console.log("sss")
      web3.eth.getTransactionReceipt(hash, function (error, receipt) {
        if (receipt) {
          self.addTransaction(hash, receipt);
          clearInterval(test);
        }
      });
    }, 5000);
  }
//   "hashE": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
//   "nonce": 2,
//   "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
//   "blockNumber": 3,
//   "transactionIndex": 0,
//   "fromE": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
//   "toE": "0x6295ee1b4f6dd65047762f924ecd367c17eabf8f",
//   "valueE": "123450000000000000",
//   "gas": 314159,
//   "gasPrice": "2000000000000",
//   "input": "0x57cb2fc4",
//   "txReceiptStatus":"Success"
// }

  addTransaction(hash, receipt) {
    console.log(this,"before");

    web3.eth.getTransaction(hash, function (error, transaction) {
      console.log(web3,"sssssssssssssssssss");
      let transactionReceipt = {};
      transactionReceipt.blockHash = transaction.blockHash;
      transactionReceipt.blockNumber = transaction.blockNumber;
      transactionReceipt.fromE = transaction.from;
      transactionReceipt.gas = transaction.gas;
      transactionReceipt.nonce = transaction.nonce;
      transactionReceipt.transactionIndex = transaction.transactionIndex;
      transactionReceipt.valueE = transaction.v;
      transactionReceipt.input = transaction.input;
      transactionReceipt.toE = transaction.to;
      transactionReceipt.hashE = hash;
      transactionReceipt.gasUsed = receipt.gasUsed;
      transactionReceipt.txReceiptStatus = receipt.status;
      console.log(transaction, "transaction");
      console.log(receipt, "receipt");
      console.log(transactionReceipt, "trrrrr");
    });

    //TODO api function post transaction, pending.count = 1
    setTimeout(() => {
      // ToDo request tables ,,,,,,if pending.count>0
    }, 120000);

  }

  showPopup(message) {
    this.props.changePopup(message, true, false, "");
  }


  transactionSubmited(hash) {
    this.showPopup("You have submitted this transaction!");
    this.textInput.value = "";
    isTransationInProgress = true;
  }


  static propTypes = {
    changePopup: PropTypes.func
  };


  componentDidMount() {
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
                  <p className="bot-status active">You have <br/> 0 Ether <br/> in your wallet </p>
                </div>

                <div><input type="number" ref={(input) => {
                  this.textInput = input;
                }} className="form-control bot-info"
                            placeholder="Input Ether count to charge your account"/></div>
                <br/>
                <div className="bot-btn">
                  <button className="btn btn-success dashboard  bot-btn-sub" onClick={(e) => this.handlePay(e) }>
                    Recharge wallet
                  </button>
                </div>
              </div>
            </div>
          </Web3Provider>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {
    ...projectDataActions,
    ...paymentActions,
    ...popupActions
  }
)(Wallet);