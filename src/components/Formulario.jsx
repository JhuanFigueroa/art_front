import "../App.css";

import { useState,useEffect } from "react";
import axios from "axios";
import Imagen from "./Imagen";

function Formulario() {
  const [imageURL, setImageURL] = useState('');
  
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    setImage1(file);
  };

  const handleImage2Change = (event) => {
    const file = event.target.files[0];
    setImage2(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar las imágenes al servidor
    const formData = new FormData();
    formData.append('image1', image1);
    formData.append('image2', image2);

    fetch('https://web-production-1728.up.railway.app/generar/', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // Manejar la respuesta de la API
    })
    .catch(error => {
      // Manejar los errores
    });
  };

  const obtenerImagen= async ()=>{
    const rta= await axios.get('https://web-production-1728.up.railway.app/obtener/');
    console.log(rta.data);
    setImageURL(rta.data.imagen);

  }


  return (
    <div className="container">
    <div className="search-container">
  
    <button className="btn"  onClick={handleSubmit}>Generar imagen</button>
      <button className="btn"  onClick={obtenerImagen}>Obtener imagen</button>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image1">Image 1:</label>
        <input type="file" id="image1" accept="image/*" onChange={handleImage1Change} />
      </div>
      <div>
        <label htmlFor="image2">Image 2:</label>
        <input type="file" id="image2" accept="image/*" onChange={handleImage2Change} />
      </div>
    </form>
    
    {imageURL && (
  <Imagen imageURL={imageURL}/>
    )}
   
</div>
    
  );
}

export default Formulario;


