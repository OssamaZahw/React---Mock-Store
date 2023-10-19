import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import User from "./components/User";
import About from "./components/About";
import Shop from "./components/Shop";
import Navbaar from "./components/Navbar";
import Lab1 from "./components/Lab 1"
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import LandingPage from "./components/LandingPage";

function App() {
  

  

  return (
    <>
      <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/lab1" element={<Lab1/>} />
      </Routes>
      </Router>



    </>
  );
}

export default App;
