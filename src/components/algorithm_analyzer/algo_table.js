import React,{useState,useRef} from 'react'
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import '../../css/table.scss'
const Table = () => {

const location = useLocation()
const [Table,setTable] = useState(location.state)
	return (
<>
<div style={{background:"lightblue"}}>
<main style = {{display:"inline-block"}} className="booododod">
<h1 style={{textAlign:"center"}}>Top Algorithms</h1>
  <div class="container">
	<table>
		<thead>
			<tr>
				{Table.columns.map((i)=> {

          	return (

          		<th className="theaddd">{i}</th>
          		)
          })}
			</tr>
		</thead>
		<tbody>
			{Table.data.map((i) => {


        	return (
        	<tr>
        		{i.map((j) => {

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
</main>
</div>




</>

		)
}


export default Table