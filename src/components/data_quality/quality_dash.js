import React,{useState,useRef} from 'react'
import '../../css/quality_dash.scss'
import Button from '@mui/material/Button';
import { FaUpload } from 'react-icons/fa';
import { TbReportSearch } from "react-icons/tb";
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

const Quality = () => {

const [open,setOpen] = useState(false)

const [prodata,setProdata] = useState()

const navigate = useNavigate()
const [text,setText] = useState("No file Chosen")

const handleSubmit = (e) => {
 
  e.preventDefault()
  console.log(text)

  const val2 = document.getElementsByName('input_list');
var len2 = document.getElementsByName('input_list').length;

const arr1 = new Array();
let count = 0;
for(let j = 0; j < len2; j++) 
  {
      if(val2[j].checked)
        {

           arr1[count] = val2[j].value;
           count = count+1;
        }
                
  }
  console.log(arr1);

  
   // console.log(document.getElementById('actual-btn').files[0]);
   const formData = new FormData(e.target);
    console.log(formData)
    const data = {

    name:arr1,
    form:formData
    

  }

   axios.post("http://localhost:5000/get_data",formData)
      .then(function (response) {


       setProdata(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log("Error Ocuured")
      });

      

}

const handleReport = () => {

navigate("/report_quality",{

  state: prodata
})
}

const handleHistory = () => {


  

navigate("/history_quality")
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
    <div className="body2">
		<div className="bod">
		<h1>Data Quality Reporter</h1>
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
        <h2 className="card__title" >Upload</h2>


        <FaUpload size={70} onClick={() => setOpen(true)}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}} >Upload data</h2>
        <p style={{color:"white"}}>Here you can select the list of operations to be performed on the data
        and then upload the dataset on which the operations are to be performed</p>
      </div>
    </li>
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/1336/1336494.svg" alt="" width="120" />
        </div>
        <h2 className="card__title">Report</h2>

        <TbReportSearch size={70} onClick= {handleReport}/>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2 style={{color:"white"}}>Report</h2>
        <p style={{color:"white"}}>Here the results of the analysis performed on the uploaded data is shown in the form of a 
        report for better understanding so user can get a better understanding of the data</p>
      </div>
    </li>
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120" />
        </div>
        <h2 className="card__title">History</h2>

        <BsClockHistory  size={70} onClick= {handleHistory}/>
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
    
 <Dialog open={open} onClose={() => setOpen(false)}
 PaperProps={{
        sx: {
          width: "100%",
          maxHeight: 1500
        }
      }}>
        <DialogTitle style={{fontSize:"25px"}}>Operation details</DialogTitle>
        <Divider />
         <form onSubmit={handleSubmit} encType="multipart/form-data">
        <DialogContent >
       
        	<ul className="list">
  <li className="list-item">
    <input type="checkbox" className="hidden-box" id="first" name="input_list" value="filetype"/>
    <label htmlFor="first" className="check--label">
      <span className="check--label-box"></span>
      <span className="check--label-text">Type of File</span>
    </label>
  </li>
  <li className="list-item">
    <input type="checkbox" className="hidden-box" id="second" name="input_list" value="shape"/>
    <label htmlFor="second" className="check--label">
      <span className="check--label-box"></span>
      <span className="check--label-text">Rows and Columns</span>
    </label>
  </li>
  <li className="list-item">
    <input type="checkbox" className="hidden-box" id="third" name="input_list" value="duplicates"/>
    <label htmlFor="third" className="check--label">
      <span className="check--label-box"></span>
      <span className="check--label-text">No of duplicates</span>
    </label>
  </li>
  <li className="list-item">
    <input type="checkbox" className="hidden-box" id="fourth" name="input_list" value = "nullval"/>
    <label htmlFor="fourth" className="check--label">
      <span className="check--label-box"></span>
      <span className="check--label-text">Null Values</span>
    </label>
  </li>
  <li className="list-item">
    <input type="checkbox" className="hidden-box" id="fifth" name="input_list" value="info"/>
    <label htmlFor="fifth" className="check--label">
      <span className="check--label-box"></span>
      <span className="check--label-text">Table Info</span>
    </label>
  </li>
   <li className="list-item">
    <input type="checkbox" className="hidden-box" id="sixth" name="input_list" value="matrix"/>
    <label htmlFor="sixth" className="check--label">
      <span className="check--label-box"></span>
      <span className="check--label-text">Correlation Matrix</span>
    </label>
  </li>
</ul>

<input type="file" id="actual-btn" className="hide"  onChange={(e) =>setText(e.target.value)} name="file"/>
<label htmlFor="actual-btn" className="file">Choose File</label>&nbsp;
<span>{text}</span>
          
        

        </DialogContent>
        <DialogActions>
          <Button  type="submit" onClick={() => setOpen(false)}>Submit</Button>
          <Button   onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
        </form>
      </Dialog>
      </div>
		</>

		)
}

export default Quality