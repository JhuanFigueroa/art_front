
import { useState,useEffect } from "react";
import axios from "axios";



function Imagen({imageURL}) {
    return (
        <div className="img-container">
        <img src={imageURL} alt="Image" />
        </div>
    );
}


export default Imagen;