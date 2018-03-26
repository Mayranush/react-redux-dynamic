import React from "react";
import {connect} from "react-redux";
import {projectDataActions,paymentActions} from "../../actions/index";
import "./paymentSettings.scss";
import {Web3Provider} from "react-web3";
/*
const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')
function startApp(web3) {
  const eth = new Eth(web3.currentProvider)
  const contract = new EthContract(eth)
  initContract(contract)
}
console.log(web3.currentProvider,"looooooooooooooog");
const eth = new Eth(web3.currentProvider)
const contract = new EthContract(eth)
const abi = [{
  "constant": false,
  "inputs": [
    {
      "name": "_to",
      "type": "address"
    },
    {
      "name": "_value",
      "type": "uint256"
    }
  ],
  "name": "transfer",
  "outputs": [
    {
      "name": "success",
      "type": "bool"
    }
  ],
  "payable": false,
  "type": "function"
}]
const address = 0x7DC41Dc80F0E17b62aA8807507F20D0D68728Fb9
function initContract(contract) {
  const MiniToken = contract(abi)
  const miniToken = MiniToken.at(address)
  listenForClicks(miniToken)
}
function listenForClicks(miniToken) {
  var button = document.querySelector('button.transferFunds')
  button.addEventListener('click', function () {
    console.log(web3,"wess");
    miniToken.transfer(0x7DC41Dc80F0E17b62aA8807507F20D0D68728Fb9, 0.3, {from: 0x2af6Ee3E1A532454F564a0DDBC085Ec95F5445e8})
      .then(function (txHash) {
        console.log('Transaction sent')
        console.dir(txHash)
        waitForTxToBeMined(txHash)
      })
      .catch(console.error)
  })
}*/
export class PaymentSettings extends React.Component {
  constructor(props) {
    super(props);
    this.handlePay = this.pay.bind(this);
  }

  pay(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.payment();
  }
  componentDidMount() {
  // initContract(contract)
  }

  render() {
    console.log(this.props,"puuuuuuuuuuuuuuuf");
    return (


      <Web3Provider>
        <div>
          <div className="ether-account-linked">You have successfully linked your Ether account to this application!
          </div>
          <div className="wallet">
            <div className="bot-info">
              <p className="bot-status active"><span className="dot dotRed"/>You have 0 Coins in your wallet </p>
              {/*<p className="bot-status"><span className="dot dotGreen"/>You have 356 Coins in your wallet  </p>*/}
            </div>

            <div><input type="number" className="form-control bot-info"
                        placeholder="Input Ether count to charge your account"/></div>
            <br/>
            <div className="bot-btn">
              <button className="btn btn-success dashboard  bot-btn-sub" onClick={(e) => this.handlePay(e) }>
                Recharge wallet
              </button>
              <button className="transferFunds">Send Money!</button>
            </div>
          </div>
        </div>
      </Web3Provider>

    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {...projectDataActions,
    ...paymentActions}
)(PaymentSettings);