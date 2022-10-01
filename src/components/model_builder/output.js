import React,{useState,useRef,useEffect} from 'react'
import '../../css/output.scss'
import { FaPaw } from "react-icons/fa";
import axios from 'axios';
import ConfettiGenerator from "confetti-js";
import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";
import CanvasJSReact from '../../canvas/canvasjs.react';


const Output = () => {

const refContain = useRef(null)
const location = useLocation()
const [output,setOutput] = useState(location.state.output)
const [train,setTrain] = useState([
  {
    x: 0,
    y: 0
  },
  {
    x: 1,
    y: 1
  },
  {
    x: 2,
    y: 2
  },
  {
    x: 3,
    y: 3
  },
  {
    x: 4,
    y: 4
  },
  {
    x: 5,
    y: 5
  }
])
const [test,setTest] = useState([
  {
    x: 0,
    y: 0
  },
  {
    x: 1,
    y: 1
  },
  {
    x: 2,
    y: 2
  },
  {
    x: 3,
    y: 3
  },
  {
    x: 4,
    y: 4
  },
  {
    x: 5,
    y: 5
  }
])
const [x,setX] = useState([0,1,2,3,4,5,6,7,8,9])
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const datapoints1 = [];
const datapoints2 = [];




console.log()
useEffect(() => {

	axios.get("http://localhost:5000/chart_data")
      .then(function (response) {
      	for(var i=0;i<response.data.testing.length;i++)
      		{
      			datapoints1[i] = {"x":i,"y":response.data.testing[i]}
      			datapoints2[i] = {"x":i,"y":response.data.training[i]}
      		}
      		setTest(datapoints1)
      		setTrain(datapoints2)
        console.log(response.data)
      })
      .catch(function (error) {
       
        console.log("Error Ocuured")
      });



	if(output === 0)
		{
// const val2 = document.getElementsById('my-canvas');
  const confettiSettings = { target: refContain.current , max:150,clock:50,rotate:true};
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
 
//   setTimeout(() => {
// 
//   	confetti.clear()
//   },6000)
}, []) // add the var dependencies or not

const options = {
			theme: "light1",
			title: {
				text: "Training data Accuracy"
			},
			axisY: {
				title: "Accuracy",
				// prefix: "$"
			},
			data: [{
				type: "line",
				lineColor:"red",
				// yValueFormatString: "#.###",
				dataPoints: train
			}]
		}

const options2 = {
			theme: "light1",
			title: {
				text: "Testing data Accuracy"
			},
			axisY: {
				title: "Accuracy",
				// prefix: "$"
			},
			data: [{
				type: "line",
				lineColor:"red",
				// yValueFormatString: "#.###",
				dataPoints: test
			}]
		}

	return (
		<>
		{

			output === 0 ?
			<main>
		<canvas id="my-canvas" ref={refContain}>
		
		</canvas>
		<main className="ontop">
		<h1 className="text-design">Congratulations <br />you are not <br/>Diabetic</h1>

		</main>
		
		</main>

			:
			<main style={{backgroundColor:"#0A758F"}} className="rain">
		<section >
		
		<h1 className="text-design2"> We're Sorry <br />but you might be <br/>Diabetic</h1>

		
		</section>
		
		
		</main>
		}
		<hr style={{color:"blue"}}></hr>
		{ train && 

		<div>
			<h1 style={{textAlign:"center"}}>Training vs Testing</h1>
			<div className="set99">
				 <CanvasJSChart options={options} />
			</div>
			<div className="set99">
				 <CanvasJSChart options={options2} />
			</div>
		</div>


		}
		</>

		)
}

export default Output