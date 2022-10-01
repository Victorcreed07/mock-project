import React ,{useState,useEffect}from 'react'
import '../../css/history.scss'
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import axios from 'axios';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import Transitions from '../Transition'

const History = () => {

const [history,setHistory] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)
var key;
try {
useEffect(() => {
 

 


axios.get("http://localhost:5000/read_history")
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
const Property = "Date";
const groupeddata = mapValues(groupBy(history,Property), x => x.map(y => omit(y,Property) ));
var data = [];

data.push(groupeddata);

console.log(history)

// for (const key in groupeddata) {
//   if (groupeddata.hasOwnProperty(key)) {
//     console.log(`${key}: ${groupeddata[key].length}`);
//   }
// }
 var values = Object.values(groupeddata)
 var keys = Object.keys(groupeddata)
console.log(keys)


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
    keys.map((i) => {


      return (

        <div className="entry">
    <div className="title">
      <h3>{i}</h3>
      
    </div>
    <div className="body">
      <p>Details</p>
      <ul>
      {history.map((j) => {

      
      		return (
      			<>
      			{j.Date === i && <li style={{color:"black"}}>User performed {j.Action} operation on file {j.Filename}</li>}
      			</>
      			)
      	
      })}
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

export default History