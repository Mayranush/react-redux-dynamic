import React from "react";
import { connect } from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./blog.scss";
export class Blog extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    {
      console.log(this.props.data, "this props---------------Blog");
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav" >
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <a className="nav-link" href="index.html">
                  <i className="fa fa-fw fa-dashboard"/>
                  <span className="nav-link-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                <a className="nav-link" href="charts.html">
                  <i className="fa fa-fw fa-area-chart"/>
                  <span className="nav-link-text">Charts</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                <a className="nav-link" href="tables.html">
                  <i className="fa fa-fw fa-table"/>
                  <span className="nav-link-text">Tables</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Settings">
                <a className="nav-link" data-toggle="collapse" href="#collapseComponents"
                   data-parent="#exampleAccordion">
                  <i className="fa fa-fw fa-wrench"/>
                  <span className="nav-link-text">Settings</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Adminarea">
                <a className="nav-link" data-toggle="collapse" href="#collapseComponents"
                   data-parent="#exampleAccordion">
                  <i className="fa fa-fw fa-wrench"/>
                  <span className="nav-link-text">Admin Area</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav sidenav-toggler">
              <li className="nav-item">
                <a className="nav-link text-center" id="sidenavToggler">
                  <i className="fa fa-fw fa-angle-left"/>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-fw fa-bell"/>
                  <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
                  <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"/>
            </span>
                </a>
                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                  <h6 className="dropdown-header">New Alerts:</h6>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"/>Status Update</strong>
              </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">You have 155 new tweets
                    </div>
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"/>Status Update</strong>
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
                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..."/>
                    <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-search"/>
                    </button>
              </span>
                  </div>
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                  <i className="fa fa-fw fa-sign-out"/>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-wrapper">


            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Navbar</li>
              </ol>
              <h1>Navbar</h1>
              <hr />
                <p>The SB Admin navbar can be either fixed or static, and it supports the navbar-light and navbar-dark Bootstrap 4 classes.</p>
                <a className="btn btn-primary" href="#" id="toggleNavPosition">Toggle Fixed/Static Navbar</a>
                <a className="btn btn-primary" href="#" id="toggleNavColor">Toggle Navbar Color</a>

            </div>
          <footer className="sticky-footer">
            <div className="container">
              <div className="text-center">
                <small>Copyright © Your Website 2017</small>
              </div>
            </div>
          </footer>

          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up"/>
          </a>

          <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <a className="btn btn-primary" href="">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
  }
  }

  export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
  )(Blog);