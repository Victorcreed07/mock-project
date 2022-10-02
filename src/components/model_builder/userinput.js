import React,{useState,useRef,useEffect} from 'react'
import '../../css/userinput.scss'
import { FaPaw } from "react-icons/fa";
import { Outlet, Link ,useNavigate } from "react-router-dom";
import axios from 'axios';
import Transitions from '../Transition'
const UserInput = () => {

const [name,setName] = useState("")
const [weight,setWeight] = useState("")
const [height,setHeight] = useState("")
const [birthday,setBirthday] = useState("")
const [result,setResult] = useState()
const [pregnancy,setPregnancy] = useState()
const [load,setLoad] = useState(false)
const navigate = useNavigate()
const refContainer =  useRef(null)

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const handleSubmit = (e) => {
  setLoad(true)
e.preventDefault()
const birthdate = parseInt(String(birthday).slice(0,4))
const date = new Date();
const currentdate = parseInt(date.getFullYear());
var gender,glucose ,pressure;
const age = currentdate- birthdate;
const bmi = (weight) / ((height/100) * (height/100));

const val = document.getElementsByName('gender');
    var len = document.getElementsByName('gender').length;
    // console.log(val);

for(let i = 0; i < len; i++) 
  {
      if(val[i].checked)
        {
           gender = val[i].value;
        }
                
  }

  const val1 = document.getElementsByName('glucose');
    var len1 = document.getElementsByName('glucose').length;
    // console.log(val);

for(let i = 0; i < len1; i++) 
  {
      if(val1[i].checked)
        {
           glucose = val1[i].value;
        }
                
  }

  if(glucose === "50-85")
    {
        glucose = random(50,85)
    }
    else if(glucose === "85-140")
      {
          glucose = random(85,140)
      }
       else if(glucose === "140-199")
        {
          glucose = random(140,199)
        }
       else if(glucose === "200+")
        {
            glucose = random(200,250)
        }


  

  const val2 = document.getElementsByName('pressure');
    var len2 = document.getElementsByName('pressure').length;
    // console.log(val);

for(let i = 0; i < len2; i++) 
  {
      if(val2[i].checked)
        {
           pressure = val2[i].value;
        }
                
  }

   if(pressure === "0-80")
    {
        pressure = random(50,80)
    }
    else if(pressure === "80-89")
      {
          pressure = random(85,89)
      }
       else if(pressure === "90-120")
        {
          pressure = random(90,120)
        }
       else if(pressure === "120+")
        {
            pressure = random(120,130)
        }



const data ={
  "Pregnancies":parseInt(pregnancy),
  "Glucose":glucose,
  "BloodPressure":pressure,
  "SkinThickness":20.536458,
  "Insulin":79.79,
  "BMI":bmi,
  "DiabetesPedigreeFunction":0.47,
  "Age":age


}
console.log(data);

axios.post("http://localhost:5000/get_prediction", data)
      .then(function (response) {
        
        console.log(response.data)
        setResult(response.data)
              setTimeout(() => {

        setLoad(false)
         navigate("/output",{

        state:response.data
          })
      
      },2500)


      })
      .catch(function (error) {
        
        console.log(error)
      });


//       setTimeout(() => {
// 
//         setLoad(false)
//          navigate("/output",{
// 
//         state:result
//           })
//       
//       },2500)

      
         

//         navigate("/output",{
// 
//         state:result
//           })

    



}
useEffect(() => {

if(load)
{
  refContainer.current.style.opacity = 0.5;
}
else
{
  refContainer.current.style.opacity = 1;

}

},[load])


// 
// return (
// 
//      <div className="loader">
//   </div>
//     )

	return (

		<>
    <Transitions>
    {load && <div className="loader"></div>}
		<main className="body000" ref={refContainer}>
		<div className="signup-container">
  <div className="left-container">
    
    
  </div>
  <div className="right-container">
    <form onSubmit={handleSubmit}>
    <header>
      <h1>We put your health first</h1>
    
      <div className="set">
        <div className="pets-name">
          <label htmlFor= "pets-name"> Name</label>
          <input id="pets-name" type = "text"  placeholder = "eg.George" value={name}
          onChange={(e) => setName(e.target.value)} /> </div>
        <div className="pets-birthday">
          <label htmlFor= "pets-birthday" style={{marginRight:"60px"}}> Weight</label>
          <input id="pets-birthday" type = "number" placeholder = "eg.75 kg" 
          value={weight} onChange={(e) => setWeight(e.target.value)} required/> 
        </div>
      </div>
      <br />
      <div className="set">
        <div className="pets-birthday">
          <label htmlFor= "pets-birthday" style={{marginRight:"60px"}}> Birthday</label>
          <input id="pets-birthday" type = "date" placeholder = "MM/DD/YYYY" 
          value={birthday} onChange={(e) => setBirthday(e.target.value)}required/> 
        </div>
        <div className="pets-birthday">
          <label htmlFor= "pets-birthday" style={{marginRight:"60px"}}> Height</label>
          <input id="pets-birthday" type = "number" placeholder = "eg.180 cm" 
          value={height} onChange={(e) => setHeight(e.target.value)}required/> 
        </div>
      </div>
      <br />
      <div className="set">
        <div className="pets-gender">
          <label htmlFor = "pet-gender-female"> Gender</label>
          <div className="radio-container">
            <input id="pet-gender-female"  name = "gender" type = "radio" value ="female"  /> <label htmlFor= "pet-gender-female"> Female</label>
            <input id="pet-gender-male"  name = "gender" type = "radio" value ="male" /> <label htmlFor= "pet-gender-male"> Male</label>
          </div>
        </div>

         <div className="pets-birthday">
          <label htmlFor= "pets-birthday" style={{marginRight:"60px"}}>Pregnancies(if any)</label>
          <input id="pets-birthday" type = "number" placeholder = "0" 
          value={pregnancy} onChange={(e) => setPregnancy(e.target.value)} required/> 
        </div>
     
      </div>
      <br />
      <div className="pets-weight">
        <label htmlFor = "pet-weight-0-25"> Glucose levels</label>
        <div className="radio-container">
          <input id="pet-weight-0-25"  name = "glucose" type = "radio" value = "50-85" /><label htmlFor= "pet-weight-0-25">50-85 mg</label>
          <input id="pet-weight-25-50"  name = "glucose" type = "radio" value = "85-140" /> <label htmlFor= "pet-weight-25-50"> 85-140 mg</label>
          <input id="pet-weight-50-100"  name = "glucose" type = "radio" value = "140-199" /><label htmlFor= "pet-weight-50-100">140-199mg</label>
          <input id="pet-weight-100-plus"  name = "glucose" type = "radio" value = "200+" /><label htmlFor= "pet-weight-100-plus"> 200+ mg</label>
        </div>
      </div>
      <br />
      <div className="pets-weight">
        <label htmlFor = "pet-weight-0-25"> Blood pressure levels</label>
        <div className="radio-container">
          <input id="pressure1"  name = "pressure" type = "radio" value = "0-80" /><label htmlFor= "pressure1">0-80 Hg</label>
          <input id="pressure2"  name = "pressure" type = "radio" value = "80-89" /> <label htmlFor= "pressure2"> 80-89 Hg</label>
          <input id="pressure3"  name = "pressure" type = "radio" value = "90-120" /><label htmlFor= "pressure3">90-120 Hg</label>
          <input id="pressure4"  name = "pressure" type = "radio" value = "120+" /><label htmlFor= "pressure4"> 120+ Hg</label>
        </div>
      </div>
    </header>
    <footer className="foooter">
      <div className="set">
        <button id="back" style={{margin:"0 auto"}} type="submit">Predict</button>
        
      </div>
    </footer>
    </form>
  </div>
</div>
</main>
</Transitions>
		</>

		)

}

export default UserInput