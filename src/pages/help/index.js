import React from "react";
import {connect} from "react-redux";
import {dashboardActions, generalActions, popupActions, settingsActions} from "../../actions/index";
import "./help.scss";
import {Link} from "react-router/es6";

export class Help extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="main-content">
        <div className="header-section">How it works!</div>
        <div className="how-it-works">
          <Link to="/dashboard"><h5><strong>Dashboard</strong></h5></Link>
          <p>Twitter Tip bot account helps coin developers promote their cryptocurrencies by tipping people with
            mentioned coin. It is like a payment system to encourage interaction about their coin on twitter.</p>
          <p>You can start and stop your bot if you have subscribe for.</p>
          <p>To subscribe to bot you need to go to &ldquo;My Wallet&rdquo; section, add coins to your wallet, then got
            to &ldquo;Subscription&rdquo; section and pay for subscription.</p>
          <p>If your bot is running you can&rsquo;t change bot settings. So please stop the bot and then edit your
            settings.</p>
          <div className="dashboard-image"></div>
          <p>&nbsp;</p>
          <Link to="/wallet"><h5><strong>My wallet</strong></h5></Link>
          <div className="wallet-image"></div>
          <p>If you see this image in &ldquo;My Wallet&rdquo; section then you must</p>
          <ol>
            <li>Download MetaMask extension for your browser(Download here for <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Google
              Chrome</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/">Mozilla</a>)
            </li>
            <li>Login to your MetaMask or create account if you have not one and you will see your current coins you
              have in your wallet and the pending and ended transactions.
            </li>
          </ol>
          <p>If you want to add coins to your wallet, enter the coin amount in text box and click on &ldquo;Pay with
            MetaMask&rdquo;</p>
          <div className="metamask-image"></div>
          <p>The MetaMask application will be shown for confirming transaction. After submitting transaction it can take
            some minutes for transaction to be moved from pending to transaction history list.</p>
          <p>&nbsp;</p>
          <Link to="/subscription"><h5><strong>Subscription</strong></h5></Link>
          <p>Subscription to Twitter Tip Bot is for one month for 0.1 coin. If you are not subscribed you will not be
            able to run the bot.</p>
          <p>You can see your subscription history as well.</p>
          <p>&nbsp;</p>
          <Link to="/tables"><h5><strong>Tables</strong></h5></Link>
          <p>In this section you can see bot tips history with details of tweet ID, Twitter User ID that was tipped,
            tweeted text, retweet text, tweet&rsquo;s time.</p>
          <p>&nbsp;</p>
          <Link to="/settings"><h5><strong>Settings</strong></h5></Link>
          <h6>My details</h6>
          <p>Enter your first name, last name, email and the Twitter account. This Twitter account will be used for
            tipping at Twitter.</p>
          <div className="sett-image"></div>
          <p>To reset password Go to Settings -&gt; My Details -&gt; Reset Password.</p>
          <h6>Twitter API Details</h6>
          <p>Follow this steps to get Twitter API details</p>
          <ol>
            <li>Log into the&nbsp;<a href="https://dev.twitter.com/">Twitter Developers</a>
              <ul>
                <li>If you don't already have an account, you can login with your normal Twitter credentials</li>
              </ul>
            </li>
            <li>Go to "<a href="https://apps.twitter.com/app/new">Create an app</a>"</li>
            <li>Fill in the details of the application you'll be using to connect with the API
              <ul>
                <li>Your application&nbsp;<strong>name must be unique.</strong>If someone else is already using it, you
                  won't be able to register your application until you can think of something that isn't being used.
                </li>
              </ul>
            </li>
            <li>Click on&nbsp;<strong>Create your Twitter application</strong></li>
            <li>Details of your new app will be shown along with your consumer key and consumer secret.</li>
            <li>Scroll down and click&nbsp;<strong>Create my access token</strong>
              <ul>
                <li>The page will then refresh on the "Details" tab with your new access tokens. You can recreate these
                  at any time if you need to.
                </li>
              </ul>
            </li>
          </ol>
          <p>By default your apps will be granted for read-only access. To change this, go to the&nbsp;
            <em>Settings</em>&nbsp;tab and change the access level required in the "Application Type" section.</p>
          <p>Existing apps</p>
          <p>To get the consumer and access tokens for an existing application, go to&nbsp;<a
            href="https://dev.twitter.com/apps">My applications</a>&nbsp;(which is available from the menu in the
            upper-right).</p>
          <div className="sett2-image"></div>
          <p>Note: if your bot is running you can&rsquo;t edit API details, first you need to stop the bot</p>
          <h6>Twitter Criteria</h6>
          <div className="sett3-image"></div>
          <ol>
            <li>Minimum number of followers: if set, for example 3, the bot will tip those users whose
              followers&rsquo; count is greater or equal to 3. If user has 2 followers, the bot will not tip coins
            </li>
            <li>Max count of tipping per day: the number entered in this cell indicates how many time the bot will tip
              per day for all users
            </li>
            <li>Max count of tipping per day per user: the number entered in this cell indicates how many time the bot
              will tip per day for one users
            </li>
            <li>Coin amount per tipping: You can set how many coins you want to tip</li>
            <li>Coin type: You can enter your coin name here</li>
            <li>Twitter users to be tipped: If you have desired list of Twitter users that you would like to tip only
              them, you can fill this cell separating by comma
            </li>
            <li>If &ldquo;isFollower&rdquo; is checked the bot will not tip users that are not following you.</li>
          </ol>
          <p>Note: if your bot is running you can&rsquo;t edit criteria, first you need to stop the bot</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.user, twitter: state.twitter}),
  {
    ...generalActions,
    ...settingsActions,
    ...popupActions,
    ...dashboardActions
  }
)(Help);