import React ,{useState,useEffect}from 'react'
import '../../css/history.scss'
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import axios from 'axios';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
const History = () => {

const [history,setHistory] = useState([])
const [loading,setLoading] = useState(false)
var key;
useEffect(() => {
 setLoading(true)
axios.get("http://localhost:5000/read_history")
      .then(function (response) {

        setHistory(response.data.history)
      
        console.log(response.data)
      })
      .catch(function (error) {
        console.log("Error Ocuured")
      });

      setLoading(false)

},[])
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


if(loading)
  {
    return (

      <h1 className="load">Loading...</h1>
      
      )
  }


	return (
<>
<main className="body825">
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
</>

		)
}

export default History