import React,{useState,useRef} from 'react'
import '../../css/quality_dash.scss'
import Button from '@mui/material/Button';
import { MdOnlinePrediction } from 'react-icons/md';
import { VscOutput } from "react-icons/vsc";
import { BsClockHistory } from "react-icons/bs";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider'
import { Outlet, Link ,useNavigate } from "react-router-dom";
import Transitions from '../Transition'
const ModelBuilder = () => {



const navigate = useNavigate()


const handlePrediction = (e) => {
 
  
navigate("/userinput")

  
      

}

const handleReport = () => {


}

const handleHistory = () => {


  


}

// if(loading)
//   {
//     return (
// 
//       <h1 className="load">Loading...</h1>
//       
//       )
//   }
	return (
		<>
    <Transitions>
    <div className="body2">
		<div className="bod">
		<h1>Model Builder</h1>
		</div>
		<br />
		<br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
		<div className="container23">
  <ul className="cards">
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/1496/1496034.svg" alt="" width="120" />
        </div>
        <h2 className="card__title" >Prediction</h2>


        <MdOnlinePrediction size={70} onClick ={handlePrediction} style={{cursor:"pointer"}}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}} >Find for yourself</h2>
        <p style={{color:"white"}}>The following is a prediction of whether a particular user
        has diabetes are not as it is one of the widesprread nuisance.Go and test yourself.
        Good Luck!!!</p>
      </div>
    </li>
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/1336/1336494.svg" alt="" width="120" />
        </div>
        <h2 className="card__title">Results</h2>

        <VscOutput size={70} style={{cursor:"pointer"}}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}}>Results</h2>
        <p style={{color:"white"}}>The results of your prediction done are displayed here.Hope
        you are healthy:)</p>
      </div>
    </li>
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120" />
        </div>
        <h2 className="card__title">History</h2>

        <BsClockHistory  size={70} style={{cursor:"pointer"}}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}}>History</h2>
        <p style={{color:"white"}}>History of all operations that have been performed on the uploaded dataset can be viewed here</p>
      </div>
    </li>
  </ul>
</div>
<br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
 
      </div>
      </Transitions>
		</>

		)
}

export default ModelBuilder