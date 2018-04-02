import React from "react";
import {projectDataActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./menu.scss";
import PropTypes from "prop-types";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.logout.bind(this);
    this.role = window.sessionStorage.getItem("role");
  }

  static propTypes = {
    cleanData: PropTypes.func.isRequired,
    role: PropTypes.string.isRequired
  };


  logout() {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("role");
    this.props.cleanData();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <Link className="navbar-brand" to="/dashboard">Logo Here</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
              {this.role === 'USER' &&
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <div className="nav-link">
                  <Link className="nav-link-text" to="dashboard">
                    <i className="fa fa-fw fa-tachometer-alt fa-menu"/>Dashboard
                  </Link>
                </div>
              </li>
              }
              {this.role === 'USER' &&
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Wallet">
                <div className="nav-link">
                  <Link className="nav-link-text" to="wallet">
                    <i className="fab fa-fw fa-ethereum fa-menu"/>My Wallet
                  </Link>
                </div>
              </li>
              }
              {this.role === 'USER' &&
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Subscription">
                <div className="nav-link">
                  <Link className="nav-link-text" to="subscription">
                    <i className="far  fa-fw fa-calendar-check fa-menu"/>Subscription
                  </Link>
                </div>
              </li>
              }
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                <div className="nav-link">
                  <Link className="nav-link-text" to="charts">
                    <i className="fa fa-fw fa-chart-area fa-menu"/>Charts
                  </Link>
                </div>
              </li>
              {this.role === 'USER' &&
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                <div className="nav-link">
                  <Link className="nav-link-text" to="tables">
                    <i className="fa fa-fw fa-table fa-menu"/>Tables
                  </Link>
                </div>
              </li>
              }
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Settings">
                <div className="nav-link">
                  <Link className="nav-link-text" to="settings">
                    <i className="fa fa-fw fa-wrench fa-menu"/>Settings
                  </Link>
                </div>
              </li>
              {this.role === 'ADMIN' &&
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Adminarea">
                <div className="nav-link">
                  <Link className="nav-link-text" to="users">
                    <i className="fa fa-fw fa-users fa-menu"/>Users list
                  </Link>
                </div>
              </li>
              }
              {this.role === 'ADMIN' &&
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Adminarea">
                <div className="nav-link">
                  <Link className="nav-link-text" to="admins">
                    <i className="fa fa-fw fa-user-secret fa-menu"/>Admin list
                  </Link>
                </div>
              </li>
              }
            </ul>
            {/*<ul className="navbar-nav sidenav-toggler">*/}
            {/*<li className="nav-item">*/}
            {/*<a className="nav-link text-center" id="sidenavToggler">*/}
            {/*<i className="fa fa-fw fa-angle-left"/>*/}
            {/*</a>*/}
            {/*</li>*/}
            {/*</ul>*/}
            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-fw fa-bell fa-menu"/>
                  <span className="d-lg-none">Alerts
                    <span className="badge badge-pill badge-warning">6 New</span>
                  </span>
                  <span className="indicator text-warning d-none d-lg-block">
                    <i className="fa fa-fw fa-circle fa-menu"/>
                  </span>
                </a>
                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                  <h6 className="dropdown-header">New Alerts:</h6>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#">
                     <span className="text-success">
                            <strong>
                                <i className="fa fa-arrow-up fa-fw fa-menu"/>Status Update
                            </strong>
                     </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">You have 155 new tweets
                    </div>
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#">
                    <span className="text-danger">
                           <strong>
                              <i className="fa fa-arrow-down fa-fw fa-menu"/>Status Update</strong>
                    </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">Please recharge your acount for further cooperation
                    </div>
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#"/>
                  <a className="dropdown-item small" href="#">View all alerts</a>
                </div>
              </li>
              <li className="nav-item">
                <Link to="" onClick={this.handleLogout} className="nav-link">
                  <i className="fa fa-fw fa-sign-out-alt fa-menu"/>Sign out</Link>
                {/*data-toggle="modal" data-target="#exampleModal"*/}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

