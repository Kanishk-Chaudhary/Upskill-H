import React from "react";
import {BrowserRouter , Routes,Route} from "react-router-dom";
import Home from "./Home";
import Survey from "./Survey"
import Panel from "./Panel";
const App = () => {
  return (
    <> 
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} >
      <Route path='panel' element={<Panel/>} />
      <Route path='survey' element={< Survey/>} />
      
      </Route>
    </Routes>
    </BrowserRouter>
</>
    
  );
};


export default App;
