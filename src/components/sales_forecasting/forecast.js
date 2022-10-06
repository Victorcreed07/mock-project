import React,{useState,useRef,useEffect} from 'react'
import '../../css/forecast.scss'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import Plot from 'react-plotly.js';
import Button from '@mui/material/Button';
import { AiOutlineSend } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";



const ForeCast = () => {

	const location = useLocation()
	const [load,setLoad] = useState(false)
	const [index,setIndex] = useState(location.state.index)
	const [sales,setSales] = useState(location.state.sales)
	const [trsale,setTrSales] = useState(location.state.trsale)
	const [forecast,setForecast] = useState(location.state.forecast)
	const [index2,setIndex2] = useState(location.state.index2)
	const [index3,setIndex3] = useState(location.state.index3)
	const [index4,setIndex4] = useState(location.state.index4)
	const [last,setLast] = useState(location.state.last)
	const [orilast,setOriLast] = useState(location.state.orilast)
	const [output,setOutput] = useState(location.state.time)
	var saledat = []
	var dates = []
	var trenddates = []
	var trendsale = []


	return (

<>
<main style={{display:"inline-block",color:"#C3F8FF"}}>
<section className="ariba">
	<div id="label">Available data</div>
	
	<Plot
        data={[
          {
            x: index,
            y: sales,
            mode: 'lines',
            
            
          },
          
        ]}
        layout={ {width: 1450, height: 400, title: 'Company Sales',plot_bgcolor:'#FBF2CF'} }
      />
      
</section>
<section className="ariba2">
	<div className="rarara">{`Next ${output.value} ${output.period} data`}</div>
	<Plot
        data={[
          {
            x: index2,
            y: forecast,
            mode: 'lines',
            line: {
				    color: 'orange'
				    
				  }
            
            
          },
          
        ]}
        layout={ {shapes: [
        // 1st highlight during Feb 4 - Feb 6
        {
            type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'paper',
            x0: 'Mar 2014',
            y0: 0,
            x1: 'Dec 2014',
            y1: 1,
            fillcolor: '9CFF2E',
            opacity: 0.2,
            line: {
                width: 0
            }
        }],width: 1400, height: 450, title: 'Predicted Sales',plot_bgcolor:'#FBF2CF'} }
      />
</section>
<section className="ariba2">
	<div className="rarara">Additional Data</div>
	<div className="moeeee">
	<Plot
        data={[
          {
            x: index3,
            y: trsale,
            mode: 'lines',
            line: {
				    color: 'red'
				    
				  }
            
            
          },
          
        ]}
        layout={ {width: 600, height: 400, title: 'Trend',plot_bgcolor:"hsl(210, 36%, 96%)"} }
      />
      </div>
      <div className="moeeee">
	<Plot
        data={[
          {
            x: index4,
            y: last,
            mode: 'lines',
            line: {
				    color: 'green'
				    
				  },
			name:'Prediction'
            
            
          },
          {
            x: index4,
            y: orilast,
            mode: 'lines',
            line: {
				    color: 'pink'
				    
				  },
			name:'Original'
            
            
          },
          
        ]}
        layout={ {width: 600, height: 400, title: 'Accuracy',plot_bgcolor:"hsl(210, 36%, 96%)"} }
      />
      </div>
</section>
<br />
<br />
<br />
		<div className="centerdiv">
			<a href="#" ><Link to="/powerbi2">To get more information about the dataset visit our Powerbi Dashboard</Link><BiLinkExternal /></a>
		</div>
<br />
</main>
</>

		)
}

export default ForeCast