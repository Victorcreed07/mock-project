import React ,{useState} from 'react'
import '../css/Login.scss'
import axios from 'axios'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Outlet, Link ,useNavigate } from "react-router-dom";
const Login = () => {

const [name,setName] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState(false)
 const navigate = useNavigate();
const handleClick = () => {
    
   

	if(name === "" && password === "")
		{
			setError(true)
			return 
		}
    const data = {
    	"name":name,
    	"password":password
    }
    axios.post("http://localhost:5000/login", data)
      .then(function (response) {
       
        console.log(response.data)
        if(response.data.status.statusMessage === "Identical")
        	{
        		setError(false)
        		navigate("/dashboard")

        	}
        	else
        		{
        			setError(true)
        		}
      })
      .catch(function (error) {
        console.log("Error Occured")
        setError(true)
      });

    
  }

  

	return (
		<>
		<div className="body">
			<br />
			<br />
			<br />
			<div className="box-form">
	<div className="left">
		<div className="newover">
		<h1>We've been expecting <br />you</h1>
		<p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Curabitur et est sed felis aliquet sollicitudin</p>
		<span>
			<p>Login with social media</p>
			<a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
		</span>
		</div>
	</div>
	
	
		<div className="right">
		<h5>Login</h5>
		<br />
		<br />
		<br />
		<p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p>
		{error && <Alert severity="error" style={{fontSize:"15px"}}>Invalid Credentials</Alert>}
		
		<div className="inputs">
			<input type="text"
			 placeholder="user name" 
			 value={name}
            onChange={(e) => setName(e.target.value)}/>
			<br />
			<input type="password" 
			placeholder="password" 
			value={password}
            onChange={(e) => setPassword(e.target.value)} />
		</div>
			
			<br />
			<br />
			
		<div className="remember-me--forget-password">
				
	
			<p>forget password?</p>
		</div>
			
			<br />
			<button onClick = {() => handleClick()}>Login</button>
	</div>
	
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
</div>

		</>

		)
}

export default Login