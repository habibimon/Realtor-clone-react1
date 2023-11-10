
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Login from './pages/Login';
import ForgotPassword from "./pages/ForgotPassword"


function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/Offers' element={<Offers />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
      <Route path='/SignIn' element={<SignIn />}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/ForgotPassword' element={<ForgotPassword />}></Route>

    </Routes> 
    </Router>
    </>
    
    
    
  );
}

export default App;

