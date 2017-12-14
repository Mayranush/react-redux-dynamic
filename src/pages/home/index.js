
import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import "./home.scss";
import { Link } from 'react-router/es6';

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">LOGO HERE</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Sign in</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <header className="intro-header">
          <div className="container">
            <div className="intro-message">
              <h1>Promote your Cryptocurrency</h1>
              <hr className="intro-divider"/>
            </div>
          </div>
        </header>


        <section className="content-section-a" id="about">

          <div className="container">
            <div className="row">
              <div className="col-lg-5 ml-auto">
                <hr className="section-heading-spacer" />
                <div className="clearfix"/>
                <h2 className="section-heading">Introduction Text Title</h2>
                <p className="lead">This is a twitter bot account that helps coin developers promote their cryptocurrencies by tipping people that mention the coin. It is like a payment system to encourage interaction about their coin on twitter.</p>
              </div>
              <div className="col-lg-5 mr-auto">
                <iframe src="https://www.youtube.com/embed/xSomPDhOAu4" width="500" height="250" frameBorder="0" ></iframe>
              </div>
            </div>

          </div>

        </section>



        <aside className="banner">

          <div className="container">

            <div className="row">
              <div className="col-lg-6 my-auto">
                <h2>Connect to BOT NAME:</h2>
              </div>
              <div className="col-lg-6 my-auto">
                <ul className="list-inline banner-social-buttons">
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-secondary btn-lg">
                      <i className="fa fa-twitter fa-fw"/>
                      <span className="network-name">Twitter</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-secondary btn-lg">
                      <i className="fa fa-facebook fa-fw"/>
                      <span className="network-name">Facebook</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-secondary btn-lg">
                      <i className="fa fa-linkedin fa-fw"/>
                      <span className="network-name">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>


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
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }

)(Home);