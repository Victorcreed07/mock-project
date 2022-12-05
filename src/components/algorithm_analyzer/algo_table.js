import React,{useState,useRef} from 'react'
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import '../../css/table.scss';
import axios from 'axios';
import { TbSortAscending2,TbSortDescending2 } from "react-icons/tb";
const Table = () => {

const location = useLocation()
const [Tablecol,setTablecol] = useState(location.state.table?.columns)
const [Tablerow,setTablerow] = useState(location.state.table.data)
const [Table,setTable] = useState(location.state.table)
 const [model,setModel] = useState(location.state.model)
const [data,setData] = useState()
const [disable,setDisable] = useState(location.state.eda)
 const [sortField, setSortField] = useState("");
 const [order, setOrder] = useState("desc");
 const [clicked,setClicked] = useState(false)
const navigate = useNavigate()
const handleClick  = () => {

	navigate("/basiceda")
}
const handleMouse = (e) => {

	
	
}

const handleHead = (e,index) => {


console.log(index)
const sortOrder = index === sortField && order === "asc" ? "desc" : "asc";
 setSortField(index);
 setOrder(sortOrder);
// e.target.style.visibility="visible";
handleSorting(index, sortOrder);
}
const handleSorting = (sortField, sortOrder) => {
 if (sortField) {
  const sorted = [...Table.data].sort((a, b) => {
   return (
    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
     numeric: true,
    }) * (sortOrder === "asc" ? 1 : -1)
   );
  });
  setTablerow(sorted)
 }
};


	return (

<>
<div style={{background:"lightblue"}}>
<main style = {{display:"inline-block"}} className="booododod">
<div >
<h1 style={{display:"inline",marginLeft:"10px"}}>Top Algorithms-{model}</h1>
<button style={{display:"inline",float:"right",marginRight:"20px",cursor:!disable?'not-allowed':'pointer'}}onClick={handleClick} className="buttt" disabled={!disable}>Know More</button>
</div>

  <div className="container">
  {Table?.columns.length === 0 && <h1 className="errormsgg">No data to show.Try something else</h1>}
	<table>
		<thead>
			<tr>
				{Tablecol?.map((i,index)=> {

          	return (

          		<th className="theaddd" key={index}onClick={(e) => handleHead(e,index)}>{i}<span className="iconns" >{order === "desc"?<TbSortAscending2/>:<TbSortDescending2/>}</span></th>
          		)
          })}
			</tr>
		</thead>
		<tbody>
			{Tablerow?.map((i) => {


        	return (
        	<tr>
        		{i?.map((j) => {

        			return (

        				<td className="tdddtd">{j}</td>
        				)
        		})}
        		</tr>
        		)
        })}
		</tbody>
	</table>
</div>
<br />

</main>


</div>




</>

		)
}


export default Table
