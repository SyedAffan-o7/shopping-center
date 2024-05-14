import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./Pages/Products";
import Productdetail from "./Pages/Productdetail";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetail/:id" element={<Productdetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
