import React,{useState,useRef} from 'react'
// var htmlContent =require('../../output.html');
import htmlContent from '../../output.html'
const BasicEDA = () => {



	return (


		<>
		<div dangerouslySetInnerHTML={ {__html: htmlContent} } />
		</>
		)
}

export default BasicEDA