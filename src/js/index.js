//import packages/libraries...
import React from "react";
import { createRoot } from 'react-dom/client';

//import Local files...
import Router from "./Components/Router/index";


//import Styles...
import '../styles/index.css'




createRoot(document.getElementById("root")).render(<React.StrictMode><Router /></React.StrictMode>)