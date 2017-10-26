import React from 'react';
import {Header} from '../../components/Header/header';

export default (...props) => {
  console.log(props,"props============")
  return(
    <div>
      <Header />    
      <div>home</div>   
    </div>
  )
}
