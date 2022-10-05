import React,{useState,useRef,useEffect} from 'react'
import '../../css/sales.scss'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import Plot from 'react-plotly.js';
import Button from '@mui/material/Button';
import { AiOutlineSend } from "react-icons/ai";
import { Outlet, Link ,useNavigate } from "react-router-dom";

const AboutSales = () => {

	const [value,setValue] = useState(1)
	const [period,setPeriod] = useState("month")
	const [index,setIndex] = useState()
	const [market,setMarket] = useState()
	const [index2,setIndex2] = useState()
	const [segment,setSegment] = useState()
	const [y1,setY1] = useState()
	const [y2,setY2] = useState()
	const [y3,setY3] = useState()
	var marketsales = [];
	var segmentsales = [];
	var consumer = [];
	var corporate = [];
	var homeoffice = [];
	var count = 0
	var a=0,b=0,c=0;
	const navigate = useNavigate()

const handleSliderChange = (e) => {

	setValue(e.target.value)
}
const handleRadio = (e) => {

	setPeriod(e.target.value)
	setValue(1)
}

const handleProceed = () => {

	const time = {
		value:value,
		period:period
	}
console.log(time)
navigate("/timeseries",{

        state:time
          })
}

useEffect(() => {

axios.get("http://localhost:5000/getbasedata")
      .then(function (response) {

        setIndex(response.data.marketcount.index)
        setIndex2(response.data.segmentcount.index)
        for(var i=0;i<response.data.marketcount.data.length;i++)
        	{
        		marketsales[i] = response.data.marketcount.data[i][0]
        	}
        	setMarket(marketsales)
        for(var i=0;i<response.data.segmentcount.data.length;i++)
        	{


        		segmentsales[i] = response.data.segmentcount.data[i][0]
        	}
        	setSegment(segmentsales)
        	for(var i=0;i<response.data.combined.data.length;i++)
        	{

        		if(count === 0)
        			{
        				consumer[a] = response.data.combined.data[i][0]
        				a +=1
        			}
        			else if(count === 1)
        				{
        					corporate[b] = response.data.combined.data[i][0]
        					b+=1
        				}
        				else if(count === 2)
        				{
        					homeoffice[c] = response.data.combined.data[i][0]
        					c+=1
        				}
        		count = (count+1)%3;

        		
        	}
        	setY1(consumer)
        	setY2(corporate)
        	setY3(homeoffice)
        console.log(response.data)

      })
      .catch(function (error) {
        
        console.log("Error Ocuured")
      });

},[])

	return (
			<>
			<section className="body699">
			<h1 style={{textAlign:"center",color:"#fc032c"}}>Sales Forecast</h1>
			<br />
			<br />
			<div className="aboutset">
				<h2 >About the dataset</h2>
				<p>Global Mart is an online supergiant store that has worldwide operations. 
				This store takes orders and delivers across the globe and deals 
				with all the major product categories — consumer, corporate & home office.
				<br/>
				<br/>
				The dataset consists of 
				<br/>

				<ul>
				<li>Sales Happened in single day</li>
				<li>Profits depending on the sales</li>
				<li>Order date</li>
				<li>Market </li>
				<li>Segments </li>
				</ul>
				</p>
			</div>
			</section>
			<section className="preddiction">
			<form>
				<div className="idkk">
					<h2 >Forecasting</h2>
					<p>Select the time period of the prediction</p>
					<div className="wrapper">
 <input type="radio" name="select" id="option-1" value="month" onChange={handleRadio}/>
 <input type="radio" name="select" id="option-2" value="year" onChange={handleRadio}/>
   <label htmlFor="option-1" className="option option-1">
     <div className="dot"></div>
      <span>Month</span>
      </label>
   <label htmlFor="option-2" className="option option-2">
     <div className="dot"></div>
      <span>Year</span>
   </label>
</div>
<p>Select the no of years or months according to your selection</p>
{period === "month"?
<div>
<label style={{fontSize:"20px"}}>{`${value} month`}</label>
<Slider  aria-label="Default" valueLabelDisplay="auto" defaultValue={2} step={1} marks min={1} max={36} className="sliddder" onChange={handleSliderChange}/>
</div>

:
<div>
<label style={{fontSize:"20px"}}>{`${value} year`}</label>
<br />
<Slider  aria-label="Default" style={{width: 300}} valueLabelDisplay="auto" defaultValue={1} step={1} marks min={1} max={3} className="sliddder" onChange={handleSliderChange}/>
</div>
}
 <Button variant="contained" endIcon={<AiOutlineSend />} style={{fontSize:"15px"}} onClick={handleProceed}>
        Proceed
      </Button>
				</div>
				</form>
			</section>

			<section>
				<h2>Learn More about the dataset</h2>
				<div className="set38">
				 <Plot
        data={[
          {
            x: index,
            y: market,
            type: 'bar',
            
            marker: {color: 'red'},
          },
          
        ]}
        layout={ {width: 700, height: 400, title: 'Market Count'} }
      />
      </div>
      <div className="set38">
      	<Plot
        data={[
          {
            x: index2,
            y: segment,
            type: 'bar',
            
            marker: {color: 'blue'},
          },
          
        ]}
        layout={ {width: 600, height: 400, title: 'Segment Count'} }
      />
      </div>
      <div>
      	<Plot
        data={[
          {
            x: index,
            y: y1,
            type: 'bar',
           name:'Consumer',
            marker: {color: 'orange'},
          },
          {type: 'bar', 
          x: index, 
          y: y2,
           name:'Corporate',
          marker: {color: 'green'},
      },
      	{type: 'bar', 
          x: index, 
          y: y3,
           name:'HomeOffice',
          marker: {color: 'blue'},
      },
      
        ]}
        layout={ {width: 1000, height: 400, title: 'Market-Segment Sales'} }
      />
      </div>
			</section>
			</>

		)
}

export default AboutSales