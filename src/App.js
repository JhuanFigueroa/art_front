import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./components/Formulario";
import Rostro from "./components/Rostro";

function App() {


  return (
  
<Router>
       
        <Routes>
            <Route exact path="/" element={<Rostro />} />
            <Route exact path="/arte" element={<Formulario />} />
        </Routes>

    </Router>
  );
}

export default App;


