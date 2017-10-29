import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";


export class Login extends React.Component {
  constructor(props) {    
    super(props);
  }
  
  render() {      
    {console.log(this.props.data,"this props---------------Login");   } 
    return (
      <div>
        <Header />    
        <div>Login</div>   
      </div>
    )
  }
}
  
export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Login);