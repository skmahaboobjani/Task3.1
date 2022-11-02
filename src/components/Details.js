import React from 'react';
import './hello.css'
import { TfiArrowLeft,TfiArrowRight } from "react-icons/tfi";
import {GrRefresh} from "react-icons/gr"
import{BsStar} from "react-icons/bs"
 function Details() {
  return (
    
    <div className='mabu'>
   
      <hr/><br/>
    < TfiArrowLeft/> <TfiArrowRight id='arrow'/> <GrRefresh id='re'/> 
         <input type={'text'}  placeholder={'127.0.0.1:500/index.html'}   /> {<BsStar id='s'/>}
        
        <hr/>
        
      <h1>Bitto Aggarwal</h1>
      <h6>Software Developer Educator at Geekster</h6>
      <a href="https://www.w3schools.com/">Linkidin  Github</a>
      <hr width='100%' color='black' size="50px"/>
    </div>
  );
}
export default Details
