import React,{useState,useRef,useEffect} from 'react'
import '../../css/forecast.scss'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import Plot from 'react-plotly.js';
import Button from '@mui/material/Button';
import { AiOutlineSend } from "react-icons/ai";

import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";



const ForeCast = () => {

	const location = useLocation()
	const [load,setLoad] = useState(false)
	const [index,setIndex] = useState()
	const [sales,setSales] = useState()
	const [trsale,setTrSales] = useState()
	const [forecast,setForecast] = useState()
	const [index2,setIndex2] = useState()
	const [index3,setIndex3] = useState()
	const [index4,setIndex4] = useState()
	const [last,setLast] = useState()
	const [orilast,setOriLast] = useState()
	const [output,setOutput] = useState(location.state)
	var saledat = []
	var dates = []
	var trenddates = []
	var trendsale = []


useEffect(() => {
	setLoad(true)
	axios.post("http://localhost:5000/getforecast",output)
      .then(function (response) {
      	
      	for(var i=0;i<response.data.original.index.length;i++)
        	{
        		dates[i] = response.data.original.index[i].slice(8,16)
        	}
        for(var i=0;i<response.data.trend.index.length;i++)
        	{
        		trenddates[i] = response.data.trend.index[i].slice(8,16)
        	}
        setIndex(dates)
         setIndex4(dates.slice(dates.length - 6))
        setIndex2((dates.slice(dates.length - 10)).concat(response.data.forecastdates))
         setIndex3(trenddates)
        for(var i=0;i<response.data.original.data.length;i++)
        	{
        		saledat[i] = response.data.original.data[i][0]
        	}
        	for(var i=0;i<response.data.trend.data.length;i++)
        	{
        		trendsale[i] = response.data.trend.data[i][0]
        	}
        	setSales(saledat)
        	setOriLast(saledat.slice(saledat.length - 6))
        	// setForecast(response.data.forecast)
        	setForecast((saledat.slice(saledat.length - 10)).concat(response.data.forecast))
        	setTrSales(trendsale)
        	setLast(response.data.lastsix)
        	// setOriLast(sales.slice(-6))
        	// setIndex4(index.slice(-6))
        console.log(response.data)
        setLoad(false)
      })
      .catch(function (error) {
        
        console.log("Error Ocuured")
      });
      

},[])


useEffect(() => {


},[])


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
        layout={ {width: 1400, height: 400, title: 'Predicted Sales',plot_bgcolor:'#FBF2CF'} }
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
</main>
</>

		)
}

export default ForeCast