import React from 'react'
import './images.css'
import axios from 'axios';
import { useState } from 'react';

const Images= ()=> {
  const[images,setImages]=useState([]);
  const url= 'https://picsum.photos/v2/list'; 
  const getImages= async ()=>{
    try{
   const response = await axios.get(url);
   const data=response.data;
   setImages(data);
  
  }
  catch(error){
    console.log(error)
  }
  };
  return (
   
    <div>
      <button id="btn" onClick={getImages}> Get Images </button>
     <div className="one">
     {images.map((elem,i)=>{
      return  <img key={i} src={elem.download_url} width={300} height={300} alt={`Image ${i}`} />
       })}
     </div>
    </div>
  );
};

export default Images;
