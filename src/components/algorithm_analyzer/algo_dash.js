import React,{useState,useRef} from 'react'
import '../../css/quality_dash.scss'
import '../../css/algo.css'
import Button from '@mui/material/Button';
import { MdOnlinePrediction } from 'react-icons/md';
import { VscOutput } from "react-icons/vsc";
import { BsClockHistory } from "react-icons/bs";
import axios from 'axios';
import { FaUpload } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider'
import { Outlet, Link ,useNavigate } from "react-router-dom";
import { FcSalesPerformance } from "react-icons/fc";
import Transitions from '../Transition'
import { FaHourglassStart } from "react-icons/fa";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';



const AlgoAnalyzer = () => {



const navigate = useNavigate()

const [open,setOpen] = useState(false)
const [open2,setOpen2] = useState(false)
const [text,setText] = useState("No file chosen")
const [data,setData] = useState()
const [load,setLoad] = useState(false)
const [model,setModel] = useState("")
const [target,setTarget]  = useState()
const [form,setForm] = useState()
const [targetarr,setTargetarr] = useState(["None","Upload dataset","Do it now"])



const handleUpload = (e) => {
 
  
setOpen(true)

  
      

}

const handleOutput = () => {

setOpen2(true)

}

const handleResult = () => {

navigate("/basiceda")

}

const handleSubmit = (e) => {
e.preventDefault()
const formData = new FormData(e.target);
setForm(formData)
 localStorage.setItem("file", JSON.stringify(formData));
 console.log(formData)

  localStorage.setItem("text", JSON.stringify(text));

setLoad(true)
 axios.post("http://localhost:5000/getalgo_data",formData)
      .then(function (response) {


       // setData(response.data)
        console.log(response.data)
        

        localStorage.setItem("names", JSON.stringify(response.data.columns));
        setLoad(false)
        setTargetarr()
      })
      .catch(function (error) {
        console.log("Error Ocuured")
      });

}


const handleSubmit2 = (e) => {
e.preventDefault()


const newdat = {
  target:target,
  model:model,
  dataset:JSON.parse(localStorage.getItem("file"))
}

console.log(newdat)
setLoad(true)
axios.post("http://localhost:5000/gettable",form,{ params: {
  target,
  model
}})
      .then(function (response) {


       // setData(response.data)
        console.log(response.data)
        
         setLoad(false)
         navigate("/table",{

          state:response.data.table
         })
        
        
      })
      .catch(function (error) {
        console.log("Error Ocuured")
      });

    }


const handleClose = () => {

setOpen(false)
  


}
const handleClose2 = () => {

setOpen2(false)
  


}

if(load)
{

  return (
    <>
    <div className="loader"></div>
    </>
    )
}
	return (
		<>
    <Transitions>
    <div className="body2">
		<div className="bod">
		<h1>Algorithm Analyzer</h1>
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
  <ul className="cards" >
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/1496/1496034.svg" alt="" width="120" />
        </div>
        <h2 className="card__title" >Upload</h2>


        <FaUpload size={70} onClick ={handleUpload} style={{cursor:"pointer"}}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}} >Upload dataset</h2>
        <p style={{color:"white"}}>Upload the dataset for which you want to analyze the
        efficient algorithm</p>
      </div>
    </li>
{/*     <li className="card cards__item"> */}
{/*       <div className="card__frame"> */}
{/*         <div className="card__picture"> */}
{/*           <img src="https://image.flaticon.com/icons/svg/1336/1336494.svg" alt="" width="120" /> */}
{/*         </div> */}
{/*         <h2 className="card__title">Results</h2> */}
{/*  */}
{/*         <VscOutput size={70} style={{cursor:"pointer"}}/> */}
{/*       </div> */}
{/*       <div className="card__overlay"></div> */}
{/*       <div className="card__content"> */}
{/*         <h2 style={{color:"white"}}>Results</h2> */}
{/*         <p style={{color:"white"}}>The results of your prediction done are displayed here.Hope */}
{/*         you are healthy:)</p> */}
{/*       </div> */}
{/*     </li> */}
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120" />
        </div>
        <h2 className="card__title">EDA</h2>

        <FaHourglassStart  size={70} style={{cursor:"pointer",color:"gray"}} onClick={handleResult}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}}>Basic EDA</h2>
        <p style={{color:"white"}}>Get a general understanding of the dataset with various tables and graphical representations</p>
      </div>
    </li>
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120" />
        </div>
        <h2 className="card__title">Results</h2>

        <BsClockHistory  size={70} onClick= {handleOutput} style={{cursor:"pointer",color:"brown"}}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}}>Result</h2>
        <p style={{color:"white"}}>Analyse the dataset and provide the best algorithm for performing analysis or prediction
        on the said dataset</p>
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
     <Dialog open={open} onClose={handleClose}>
     <form onSubmit={handleSubmit} encType="multipart/form-data">
        <DialogTitle style={{fontSize:"20px",fontWeight:"bold"}}>Upload</DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontSize:"15px"}}>
            Upload the dataset that you want to analyze to find the efficient algorithm
          </DialogContentText>

  <input type="file" id="actual-btn" className="hide"  onChange={(e) =>setText(e.target.value)} name="file"/>
  <br />
<label  htmlFor="actual-btn" className="file">Choose File</label>&nbsp;
<span >{text}</span>

        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleClose}>Submit</Button>
          
        </DialogActions>
        </form>


      </Dialog>



      <Dialog open={open2} onClose={handleClose2} sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "450px",  // Set your width here
        },
      },
    }}>
     <form onSubmit={handleSubmit2} >
        <DialogTitle style={{fontSize:"20px",fontWeight:"bold"}}>PreProcessing</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText style={{fontSize:"15px"}}>
            Select the target and the type of Model
          </DialogContentText>
<br />
<div className="alda">
  <label>Dataset:   </label>&nbsp;&nbsp;<span>{JSON.parse(localStorage.getItem("text"))}</span>
</div>
<div className="alda2">
  <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label" >Model</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={model}
          label="Age"
          onChange={(e) => setModel(e.target.value)}
          className="heeehaw"
        >
          <MenuItem value="" style={{fontSize:"15px"}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Classification"} style={{fontSize:"15px"}}>Classification</MenuItem>
          <MenuItem value={"Regression"} style={{fontSize:"15px"}}>Regression</MenuItem>
          
        </Select>
       
      </FormControl>

</div>
<div className="alda2">
  <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label" >Target</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={target}
          label="Age"
          onChange={(e) => setTarget(e.target.value)}
          className="heeehaw"
        >
          {/* <MenuItem value=""> */}
          {/*   <em>None</em> */}
          {/* </MenuItem> */}
          {/* <MenuItem value={10}>Ten</MenuItem> */}
          {/* <MenuItem value={20}>Twenty</MenuItem> */}
          {/* <MenuItem value={30}>Thirty</MenuItem> */}

          {
            JSON.parse(localStorage.getItem("names")).map((i,index) => {


              return (

                <MenuItem value={i} style={{fontSize:"15px"}} key={index}>{i}</MenuItem>
                )
            })
          }
        </Select>
        
      </FormControl>

      </div>

        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleClose2}>Submit</Button>
          
        </DialogActions>
        </form>
      </Dialog>
 
      </div>
      </Transitions>
		</>

		)
}

export default AlgoAnalyzer