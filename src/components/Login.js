import React ,{useState} from 'react'
import '../css/Login.scss'
import axios from 'axios'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Outlet, Link ,useNavigate } from "react-router-dom";
import {useAuth} from "./auth.js";
const Login = () => {

const [name,setName] = useState("George_6868")
const [password,setPassword] = useState("charles07")
const [error,setError] = useState(false)
 const navigate = useNavigate();
const baseurl = 'https://mock-project-api.onrender.com';
 const auth = useAuth();
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
    axios.post(`${baseurl}/login`, data)
      .then(function (response) {
       
        console.log(response.data)
        if(response.data.status.statusMessage === "Identical")
        	{
        		auth.login(data)
        		setError(false)

        		navigate("/dashboard",{ replace:true})

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
