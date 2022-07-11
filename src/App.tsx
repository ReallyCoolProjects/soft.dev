import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from './components/pages/auth/login/Login';
import Signup from './components/pages/auth/signup/Signup';
import WithNav from "./components/RouterConfig/WithNav";
import Email from "./components/pages/auth/Email";
import WithoutNav from "./components/RouterConfig/WithoutNav";

function App() {
  return (
    <div className="App min-h-screen relative font-[Poppins]">
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/signin"  element={<Login />} />
          <Route path="/signup"  element={<Signup />} />
          <Route path="/signin/email" element={<Email login={"login"}/>} />
          <Route path="/signup/email" element={<Email login={"signup"}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
