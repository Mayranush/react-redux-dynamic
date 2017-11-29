import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import store from 'store';

export class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node
  }
  
  constructor(props) {    
    super(props);
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      //changeMessage("user","token", token);
      console.log(store.getState().projectDataReducer,"-store.getState().projectDataReducer.user.token--------------before")
      store.getState().projectDataReducer.data.user.token = token;
      console.log(token,"-tokrn--------------")
      console.log(store.getState().projectDataReducer.data.user.token,"-store.getState().projectDataReducer.user.token--------------")
      
    }
  }

  render() {    

    return (
      <main className="viewport">        
        {this.props.children}
      </main>
    )
  }
}

  
