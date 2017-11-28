import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node
  }
  
  constructor(props) {    
    super(props);
  }

  componentDidMount() {
    if (!store.getState().projectDataReducer.data.login && window.location.pathname == '/blog') {
      window.location.pathname = '/login';
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

  
