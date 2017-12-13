import React from 'react';
import {Header} from '../../components/header/header';
import { connect } from "react-redux";
import { projectDataActions } from "../../actions/index";
import { GoogleChart } from "../../components/chart/googleChart";

export class Blog extends React.Component {
  constructor(props) {    
    super(props);
  }

  
  render() {      
    {console.log(this.props.data,"this props---------------Blog");   } 
    return (
      <div>
        <div>Blog</div>   
        {  
          this.props.data[0].login && 
          <GoogleChart loadCharts={true} /> 
        }
      </div>
    )
  }
}
  
export default connect(
  state => ({ data:  state.projectDataReducer.data }),
  { ...projectDataActions }
)(Blog);