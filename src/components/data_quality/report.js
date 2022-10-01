import React ,{useState,useEffect}from 'react'
import '../../css/report.css'
import Button from '@mui/material/Button';
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Transitions from '../Transition'


const Report = () => {
var data = [];
var column;
var row;
var column1;
var row1;
var column2;
var row2;
var duplicates;
const location = useLocation()
const [get_data,setGetData] = useState()
const [showInfo, setShowInfo] = useState(false);
const [showInfo1, setShowInfo1] = useState(false);
const [showInfo2, setShowInfo2] = useState(false);
const [showInfo3, setShowInfo3] = useState(false);
const [showInfo4, setShowInfo4] = useState(false);
const [showInfo5, setShowInfo5] = useState(false);
useEffect(() => {
if(location.state !== null)
	{

setGetData(location.state)
localStorage.setItem('DATA', JSON.stringify(location.state));


	}

},[])

const newdata= JSON.parse(localStorage.getItem('DATA'))
// const filetype = str(newdata.filetype).slice(0,-1)
// console.log(newdata.nullval.length)
console.log(newdata)

if(newdata.nullval)
	{
const val123 = JSON.parse(newdata.nullval)
 row = Object.values(val123)
 column = Object.keys(val123)
console.log(Object.keys(val123))
console.log(Object.values(val123))
}
if(newdata.duplicates !== null || newdata.duplicates !== undefined)
	{
		duplicates = String(newdata.duplicates)
		}

if(newdata.info)
  {
const newinfo = JSON.parse(newdata.info)
  console.log(newinfo)

  row1 = Object.values(newinfo)
  column1 = Object.keys(newinfo)
console.log(Object.keys(newinfo))
console.log(Object.values(newinfo))

}

if(newdata.matrix)
  {
const newmatrix = JSON.parse(newdata.matrix)
  console.log(newmatrix)

  row2 = Object.values(newmatrix)
  column2 = Object.keys(newmatrix)
console.log(Object.keys(newmatrix))
console.log(Object.values(newmatrix))

}
// if(newdata.nullval)
// {
// 	for(var i in newdata.nullval)
// 		{
// 
//     	// result.push([i, newdata.nullval[i]]);
// 			console.log(i)
// 		}
// 
// 
// }

	return (
		<>
		<Transitions>
		 <main className="body45">
      <div className='container322'>
      <article className="artichead" style={{textAlign:"center"}}>
        <h1 className="headd" >Quality Report</h1>
        </article>

        <section className='info'>
          <article className='question' style={{width:"885px"}}>
      <header  style={{width:"800px"}}>
        <h4 className="h44">What is the type of file that was uploaded?</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <br />
      	{showInfo && <p className="para" style={{fontSize:"20px"}}>{newdata.filetype?`The type of the file that is 
      		uploaded is ${(newdata.filetype).slice(0,-1)}`:"Select FileType to view data"}</p>}
    		</article>
    		<br />
    		<br />

    		 <article className='question' style={{width:"885px"}}>
      <header style={{width:"800px"}}>
        <h4 className="h44">What are the  number of rows and columns present in the dataset?</h4>
        <button className='btn' onClick={() => setShowInfo1(!showInfo1)}>
          {showInfo1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      	{showInfo1 && <p className="para" style={{fontSize:"20px"}}>{newdata.shape?`The no of rows and columns present
      		in this dataset is respectively ${(newdata.shape)}`:"Select shape to view data"}</p>}
    		</article>



<br />
    		<br />
    		 <article className='question' style={{width:"885px"}}>
      <header style={{width:"800px"}}>
        <h4 className="h44">How many duplicates are present in the dataset?</h4>
        <button className='btn' onClick={() => setShowInfo2(!showInfo2)}>
          {showInfo2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      	{showInfo2 && <p className="para" style={{fontSize:"20px"}}>{newdata.duplicates !== undefined ?`The total sum of all duplicate values
      	present in this dataset is  ${newdata.duplicates}`:"Select duplicates to view data"}</p>}
    		</article>

<br />
    		<br />
    		 <article className='question' style={{width:"885px"}}>
      <header style={{width:"800px"}}>
        <h4 className="h44">How many null values are present in the dataset?</h4>
        <button className='btn' onClick={() => setShowInfo3(!showInfo3)}>
          {showInfo3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      	{showInfo3 && <p className="para">{newdata.nullval ?
      		<table style={{tableLayout: "fixed" ,width: "100%"}}>
      			<tr>
				    {column.map((i) => {

				    	return (

				    		<th>{i}</th>
				    		)
				    })}
  				</tr>
  				<tr>
  					{row.map((i) => {

  						return (

  							<td style={{wordWrap: "breakWord"}}>{i}</td>
  							)
  					})}
  				</tr>
      		</table>
      	:"Select nullval to view data"}</p>}
      		 
      	
    		</article>
<br />
    		<br />

    		 <article className='question' style={{width:"885px"}}>
      <header style={{width:"800px"}}>
        <h4 className="h44">Give all the necessary information about the dataset</h4>
        <button className='btn' onClick={() => setShowInfo4(!showInfo4)}>
          {showInfo4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      	{showInfo4 && <p className="para">{newdata.info ?

          
<table style = {{tableLayout: "fixed" ,width: "100%"}}>
    <thead>
    <tr>
      <th></th>
      {/* <th>Owner</th> */}
      {/* <th>Group</th> */}
      {/* <th>Others</th> */}
      {/* <th>Administrators</th> */}
      {/* <th>Managers</th> */}
      {/* <th>Engineers</th> */}
      {/* <th>Sales</th> */}
      {/* <th>Employees</th> */}
      {/* <th>Customers</th> */}
      {/* <th>Community</th> */}

      {column1.map((i)=> {

        return (

          <th>{i}</th>
          )
      })}
    </tr>
    </thead>
    <tbody>

    <tr>
      <td>Count</td>
      {
        row1.map((i) => {

          return (
            <td style={{wordWrap: "breakWord"}}>{i.count}</td>
            )
        })
      }
      
    </tr>
    <tr>
      <td>Mean</td>
     {
        row1.map((i) => {

          return (
            <td style={{wordWrap: "breakWord"}}>{i.mean}</td>
            )
        })
      }
    </tr>
    <tr>
    <td>Max</td>
      {
        row1.map((i) => {

          return (
            <td style={{wordWrap: "breakWord"}}>{i.max}</td>
            )
        })
      }
    </tr>
    <tr>
      <td>Min</td>
       {
        row1.map((i) => {

          return (
            <td style={{wordWrap: "breakWord"}}>{i.min}</td>
            )
        })
      }
    </tr>
    
    </tbody>
  </table>
  :"Select info to view data"}</p>}
        
    		</article>

<br />
    		<br />

    		 <article className='question' style={{width:"885px"}}>
      <header style={{width:"800px"}}>
        <h4 className="h44">Provide a correlation matrix for the dataset</h4>
        <button className='btn' onClick={() => setShowInfo5(!showInfo5)}>
          {showInfo5 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      	{showInfo5 && <p className="para">{newdata.matrix ?

          
<table style = {{tableLayout: "fixed" ,width: "100%"}}>
    <thead>
    <tr >
      <th ></th>
      {column2.map((i)=> {

        return (

          <th >{i}</th>
          )
      })}
    </tr>
    </thead>
    <tbody>
    {column2.map((i) => {

      return (
        <tr>
        <td >{i}</td>
        {row2.map((j,index) => {

          return (

            <td >{j[i]}</td>
            )
        })}
        </tr>
        )
    })}
   
   
    
    </tbody>
  </table>
  :"Select matrix to view data"}</p>}
        
    		</article>

        </section>
      </div>
    </main>
    </Transitions>
		</>

		)
}

export default Report