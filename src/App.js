import React from 'react'
import Login  from "./Pages/Login/Login";
import { Route, Routes } from 'react-router-dom';
import Forgetpass from './Pages/Forgetpass/Forgetpass'
import Register from './Pages/Register/Register';
import Succes from './Pages/Succes/Succes';
 

 function App(){
   return(
       <React.Fragment> 
       <Routes>
       <Route exact path='/' element={<Login/>}></Route>  
       <Route exact path='/forget' element={<Forgetpass/>}></Route> 
       <Route exact path='/register' element={<Register/>}></Route>
       <Route   path='/succes' element={<Succes/>}></Route> 


       </Routes>

       </React.Fragment>
   );
 }

export default App;
