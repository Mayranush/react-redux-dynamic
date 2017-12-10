import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";


export class About extends React.Component {
  constructor(props) {    
    super(props);
  }
  
  render() {      
    return (
      <div>
        <Header />    
        <div>About</div>   
      </div>
    )
  }
}
  
export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(About);