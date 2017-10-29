import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";


export class Home extends React.Component {
  constructor(props) {    
    super(props);
  }
  
  render() {      
    {console.log(this.props.data,"this props---------------Hommmme");   } 
    return (
      <div>
        <Header />    
        <div>Home</div>   
      </div>
    )
  }
}
  
export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Home);