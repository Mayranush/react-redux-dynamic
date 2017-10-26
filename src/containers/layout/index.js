import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";

export class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node
  }
  
  constructor(props) {    
    super(props);
  }
 
  render() {   
    let state = store.getState();
    console.log(this.props,"this props")
    console.log(state,"this state")
    return (
      <main className="viewport">        
        {this.props.children}
      </main>
    )
  }
}

export default connect(
  state => ({ data: state.toDoList }),
  { ...projectDataActions }
)(MainLayout);
  
