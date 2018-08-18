import React from 'react';
import {Header} from '../../components/header/header';
import {connect} from "react-redux";
import {withdrawActions} from "../../actions/index";
import "./withdraw.scss";
import {Link} from 'react-router/es6';
import {Web3} from "react-web3";


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleWithdrawToken = this.withdrawTokenChange.bind(this);
    this.handleChangeAddress = this.changeAddress.bind(this);
    this.handleGetWithdraw = this.getWithdraw.bind(this);
    this.handleCheckTokenIsValid = this.checkTokenIsValid.bind(this);
  }

  getWithdraw(e) {
    e.stopPropagation();
    e.preventDefault();
  //   var addressTo = this.props.data.address;
  // //  var ethVal = web3.toWei(this.props.data.ethVal, 'ether');
  //   var ethHex = ethVal.toString(16);
  //   console.log(ethVal, "etherium  ");
  //   var gasVal = web3.toWei(25, 'gwei');
  //   var gasHex = gasVal.toString(16);
  //
  //   let self = this;
  //   console.log(web3.eth.accounts, "account");

    const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/QJR3KGTKCZNYZ6FFZTK55THUQ7GJFP9MPC"));
    const keystore = "enemy news smoke maximum raw yard strategy other ceiling moral boy protect";
    const decryptedAccount = web3.eth.accounts.decrypt(keystore, "TwitterTipBotTest");
    const rawTransaction = {
      "from": "0x67FbE23232bcbE457a9Ed25A919521b363b5D9D8",
      "to": "0xa44602589af8A38419A99FE2f8647e2c8e718195",
      "value":web3.toWei("0.001", "ether").toString(16),
      "gas": 2000,
      "chainId": 3
    };
    decryptedAccount.signTransaction(rawTransaction)
      .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
      .then(receipt => console.log("Transaction receipt: ", receipt))
      .catch(err => console.error(err));
// Or sign using private key from decrypted keystore file

    /*
web3.eth.accounts.signTransaction(rawTransaction, decryptedAccount.privateKey)
  .then(console.log);
*/
    // web3.eth.sendTransaction(
    //   {
    //     from: '0x67FbE23232bcbE457a9Ed25A919521b363b5D9D8',//0x7dc41dc80f0e17b62aa8807507f20d0d68728fb9
    //     to: addressTo,
    //     value: ethHex,
    //     gas: 53000,
    //     gasPrice: gasHex
    //   },
    //   function (error, hash) {
    //     if (error) {
    //       self.handleShowpopup(error)
    //     }
    //     if (hash) {
    //       self.handleShowpopup("Your transaction has been submitted! It may take a while for completion.");
    //       self.textInput.value = "";
    //       self.addTransaction(hash);
    //     }
    //   });
  }

  checkTokenIsValid(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    if (this.props.data.errorWithdrawToken.length == 0 && this.props.data.withdrawToken.length != 0) {
      this.props.checkWithdrawToken(this.props.data.withdrawToken);
    }
  }

  withdrawTokenChange(e) {
    let withdrawToken = e.target.value;
    this.props.withdrawTokenChange(withdrawToken);
  }

  changeAddress(e) {
    let address = e.target.value;
    this.props.changeAddress(address);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="#">LOGO HERE</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*<header className="intro-header">*/}
        <div className="container">
          <div className="intro-message">
            <form>
              {!this.props.data.validToken &&
              <div className="form-group">
                <label htmlFor="token-withdraw">Withdraw token</label>
                <input
                  className="form-control"
                  id="withdrawToken" type="text"
                  placeholder="Put your withdraw token here"
                  onBlur={(e) => this.handleWithdrawToken(e)}/>
                <p
                  className="error-for-input">{this.props.data.errorWithdrawToken.length != 0 ? '*' + this.props.data.errorWithdrawToken : ''}</p>
              </div>}
              {!this.props.data.validToken &&
              <button className={this.props.data.errorWithdrawToken.length != 0 ||
              this.props.data.errorText.length != 0 ||
              this.props.data.address.length == 0 ||
              this.props.data.withdrawToken.length == 0
                ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                      onClick={(e) => this.handleCheckTokenIsValid(e)}>Check Token
              </button>}
              {this.props.data.validToken &&
              <div className="form-group">
                <label htmlFor="address">Your ETH Address</label>

                <input
                  className="form-control"
                  id="address"
                  type="text"
                  placeholder="Put your ETH address"
                  onKeyUp={(e) => this.handleChangeAddress(e)}/>
                <p
                  className="error-for-input">{this.props.data.errorText.length != 0 ? '*' + this.props.data.errorText : ''}</p>
              </div>}
              {this.props.data.validToken &&
              <button className={this.props.data.errorWithdrawToken.length != 0 ||
              this.props.data.errorText.length != 0 ||
              this.props.data.address.length == 0 ||
              this.props.data.withdrawToken.length == 0
                ? "disabled-button btn btn-primary btn-block" : "btn btn-primary btn-block"}
                      onClick={(e) => this.handleGetWithdraw(e)}>Submit
              </button>}
            </form>
          </div>
        </div>
        {/*</header>*/}


        <section className="content-section-a" id="about">

          <div className="container">
            <div className="row">
              <div className="col-lg-5 ml-auto">
                <hr className="section-heading-spacer"/>
                <div className="clearfix"/>
                <h2 className="section-heading">Introduction Text Title</h2>
                <p className="lead">This is a twitter bot account that helps coin developers promote their
                  cryptocurrencies by tipping people that mention the coin. It is like a payment system to encourage
                  interaction about their coin on twitter.</p>
              </div>
              <div className="col-lg-5 mr-auto">
                <iframe src="https://www.youtube.com/embed/xSomPDhOAu4" width="500" height="250"
                        frameBorder="0"></iframe>
              </div>
            </div>

          </div>

        </section>


        <aside className="banner">

        </aside>


        <footer>
          <div className="container">
            <p className="copyright text-muted small">Copyright &copy; Your Company 2017. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.withdraw}),
  {...withdrawActions}
)(Home);