import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StartPoint from './App'
// import dash from "../components"
// import {pitsi} from "./assets"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StartPoint 
    tittle={"PITSI"} 
    description={"Mr Mitch ke star, WHEN I GROW UP I WANT TO BE MITCH "} 
    image={<img src="." alt="Katherine Johnson" />}
      />
    <dash />
  </React.StrictMode>,
)
