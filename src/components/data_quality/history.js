import React ,{useState,useEffect}from 'react'
import '../../css/history.scss'
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import axios from 'axios';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import Transitions from '../Transition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useAuth} from "../auth.js";
const History = () => {

const [history,setHistory] = useState([])
const [backhistory,setBackup] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(false)
const [open,setOpen] = useState(false)
const baseurl = 'https://mock-project-api.onrender.com';
const [time,setTime] = useState("All")
const duration = useAuth();
const handleClose = () => {

  setOpen(false)
}


const handleSubmit = (e) => {

e.preventDefault()
console.log(time)
var newhours;

if(time === "1")
  {

 newhours = history.filter((i) => parseInt(Math.abs(new Date() - duration.calculatetime(i.Date)) / (1000*60*60))  > 0 )
setHistory(newhours)
  }
  else if(time === "24")
    {
      newhours = history.filter((i) => parseInt(Math.abs(new Date() - duration.calculatetime(i.Date)) / (1000*60*60))  > 25 )
      setHistory(newhours)
    }
    else if(time === "7")
    {
      newhours = history.filter((i) => parseInt(Math.abs(new Date() - duration.calculatetime(i.Date)) / (1000*60*60))  > 169 )
      setHistory(newhours)
    }
    else if(time === "All")
    {
      setHistory([])
    }

}


var key;
try {
useEffect(() => {
 

 


axios.get(`${baseurl}/read_history`)
      .then(function (response) {

        setHistory(response.data.history)
        setBackup(response.data.history)
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="trashcan" width="50px" height="50px" onClick={() => setOpen(true)}><path fill="#404040" d="M144 0H304l16 32H448V96H0V32H128L144 0zM32 128H416V512H32V128zm112 64H112v16V432v16h32V432 208 192zm96 0H208v16V432v16h32V432 208 192zm96 0H304v16V432v16h32V432 208 192z"/></svg>
<div className="timeline">

{history.length === 0 && <h1 className="errormsg88">No history available</h1>}
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
<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
     <form onSubmit={handleSubmit} >
        <DialogTitle style={{fontSize:"20px",fontWeight:"bold"}}>Clear History</DialogTitle>
        <Divider />
        <DialogContent>
          {/* <DialogContentText style={{fontSize:"15px"}}> */}
          {/*  Remove  */}
          {/* </DialogContentText> */}

  <label htmlFor="duration"style={{fontSize:"20px"}}>Duration:</label>
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Time</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={time}
    label="Age"
    onChange={(e) => setTime(e.target.value)}
  >
    <MenuItem value={"7"} style={{fontSize:"15px"}}>Last 7 days</MenuItem>
    <MenuItem value={"24"} style={{fontSize:"15px"}}>Last 24 hours</MenuItem>
    <MenuItem value={"1"} style={{fontSize:"15px"}}>last hour</MenuItem>
    <MenuItem value={"All"} style={{fontSize:"15px"}}>All</MenuItem>
  </Select>
</FormControl>

        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClose}>Submit</Button>
          
        </DialogActions>
        </form>


      </Dialog>
</Transitions>
</>

		)
}

export default History
