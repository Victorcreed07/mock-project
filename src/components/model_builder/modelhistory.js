import React,{useState,useRef,useEffect} from 'react'
import '../../css/powerbi.css'

import axios from 'axios';

import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import Transitions from '../Transition'

const ModelHistory = () => {

const [history,setHistory] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)
var key;
const array12 = ["Not Diabetic","Diabetic"]
try {
useEffect(() => {
 

 


axios.get("http://localhost:5000/model_history")
      .then(function (response) {

        setHistory(response.data.history)
        setError(false)
        console.log(response.data)
      })
      .catch(function (error) {
        setError(true)
        console.log("Error Ocuured")
      });

      

},[])


 }
 catch(err)
 {
    setError(true)
 }
// const Property = "Date";
// const groupeddata = mapValues(groupBy(history,Property), x => x.map(y => omit(y,Property) ));
// var data = [];
// 
// data.push(groupeddata);

console.log(history)

// for (const key in groupeddata) {
//   if (groupeddata.hasOwnProperty(key)) {
//     console.log(`${key}: ${groupeddata[key].length}`);
//   }
// }
//  var values = Object.values(groupeddata)
//  var keys = Object.keys(groupeddata)
// console.log(keys)


if(error)
  {
    return (

      <h1 className="load">Cant load Error detected...</h1>
      
      )
  }


	return (
<>
<Transitions>
<main className="body825">
<h1 style ={{position:"absolute",top:"10px"}} className="historyh1">History</h1>

<div className="timeline">
  {
    history.map((i) => {


      return (

        <div className="entry">
    <div className="title">
      <h3>{i.Date}</h3>
      
    </div>
    <div className="body">
      <p>Details</p>
      <ul style={{color:"black"}}>
      	<li><span style={{fontWeight:"bold"}}>UserId:</span>{i.Id}</li>
      	<li><span style={{fontWeight:"bold"}}>Age:</span>{i.Age}</li>
      	<li><span style={{fontWeight:"bold"}}>Operation:</span>Performed a virtual diagnosis for diabetes</li>
      	<li><span style={{fontWeight:"bold"}}>Result:</span>{array12[i.Result]}</li>
      </ul>
    </div>
  </div>

)})}



</div>
</main>
</Transitions>
</>


		)
}

export default ModelHistory