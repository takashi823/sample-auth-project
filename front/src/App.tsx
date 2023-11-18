import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import  SignUp  from "./component/Signup/Signup";
import  Login  from "./component/Login/Login";
import Profile from "./component/Profile/Profile";

function App() {
  return (
    <div className="App">
       <BrowserRouter basename="/">
          <Routes>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;