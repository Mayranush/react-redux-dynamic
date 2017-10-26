import React from 'react';
import {Header} from '../../components/Header/header';
 
export default (...props) => { 
  console.log(props,"props============")
  return(
    <div>
      <Header />    
      <div>about</div>   
    </div>
  )
}