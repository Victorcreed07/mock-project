import React,{useState,useRef,useEffect} from 'react'
import '../../css/powerbi.css'

import axios from 'axios';

import { Outlet, Link ,useNavigate,useLocation } from "react-router-dom";

import { BiLinkExternal } from "react-icons/bi";


const PowerBi2 = () => {

	return (

		<>
		<h2 style={{textAlign:"center"}}>PowerBi DashBoard</h2>
		<main className="powerbi-dash">

		<iframe title="market" width="1200" height="600" 
		src="https://app.powerbi.com/reportEmbed?reportId=4115bf57-695f-490a-8360-c530a9d4ff36&autoAuth=true&ctid=87a25c2a-2cb4-4c40-9cbc-5268c0ed1eeb" 
		frameborder="0" allowFullScreen="true"></iframe>
		</main>
		</>

		)

}


export default PowerBi2