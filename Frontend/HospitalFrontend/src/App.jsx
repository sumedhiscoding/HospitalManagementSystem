import { useState } from "react";
import "./App.css";
import {useNavigate} from "react-router-dom"
function App() {
  const navigate=useNavigate();
  return (

    <>
    <h1 className="bg-red-600">THis is my website</h1>
    <button>This is a navigate button</button>
    </>
  );
}

export default App;
