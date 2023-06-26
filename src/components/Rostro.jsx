import "../App.css";

import { useState,useEffect } from "react";
import axios from "axios";
import Imagen from "./Imagen";
import { useNavigate } from "react-router-dom";

function Rostro() {
  const [imageURL, setImageURL] = useState('');
  const navigate=useNavigate();

const obtenerRostro=async ()=>{
  const res=await axios.get('https://web-production-1728.up.railway.app/generar2/');
  setImageURL(res.data.imagen);
}

const handleSubmit = ()=>{
  navigate('/arte');
}
  return (
    <div className="container">
    <div className="search-container">
  
    <button className="btn"  onClick={handleSubmit}>Generar arte</button>
      <button className="btn"  onClick={obtenerRostro}>Obtener Rostro</button>
    </div> 
    
    {imageURL && (
  <Imagen imageURL={imageURL}/>
    )}
   
</div>
    
  );
}

export default Rostro;


