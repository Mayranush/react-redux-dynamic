import React from "react";
import {connect} from "react-redux";
import {paymentActions, popupActions, projectDataActions} from "../../actions/index";
import "./wallet.scss";
import PropTypes from "prop-types";
import {Web3Provider} from "react-web3";

export class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handlePay = this.pay.bind(this);
    this.handleShowpopup = this.showPopup.bind(this);
    this.handleTransactionCompleted = this.transactionCompleted.bind(this);
  }

  showPopup(message) {
    this.props.changePopup(message, true, false, "");
  }

  // web3.eth.getTransaction(hash,
  // function (error, hash) {
  //   console.log(error, "error");
  //   console.log(hash, "hashhhhhh");
  // })
  transactionCompleted(hash) {
    this.showPopup("You have submitted this transaction, result will be updated soon");
    this.textInput.value = "";
  }

  static propTypes = {
    changePopup: PropTypes.func
  };

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
          self.handleTransactionCompleted(hash)
        }
      });

  }

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