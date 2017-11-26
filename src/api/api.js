import React from "react";
import axios from "axios";
// import {connect} from "react-redux";
// import {projectDataActions} from "../../actions/index";

// export class api extends React.Component {
//     constructor(props) {
//       super(props);
//     }

//     const api = axios.create({
// 	  baseURL: "http://104.237.3.213:8888/api/home",
// 	  headers: {"Accept": "*/*"}
// 	});	

// 	getData = () => {
// 		return api.get("")
// 		.then((response, error) => {
// 			console.log()
// 		})
// 	};

//     render() {
//       return ()
//     }
// }

// export default connect(
//   state => ({data: state.projectDataReducer.data}),
//   {...projectDataActions}
// )(api);

export function test(){

   const api = axios.create({
	  baseURL: "http://104.237.3.213:8888/api/home",
	  headers: {"Accept": "*/*"}
	});

    let getData = () => {
    	api.get('');
    }
   
        // .then((response) =>{
        // 	console.log(response,"response");
        //   //dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data.data});
        // })
        // .catch((err) => {
        // 	console.log(err,"err")
        //   //dispatch({type:'FETCH_USERS_REJECTED',payload:err})
        // })
  
}