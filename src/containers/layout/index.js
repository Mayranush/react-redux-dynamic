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
    console.log(store.getState().projectDataReducer.data[0].login,"login")
    console.log(window.location,"window.location")
    if (!store.getState().projectDataReducer.data[0].login && window.location.pathname == '/blog') {
      console.log(this,"this");
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

  
