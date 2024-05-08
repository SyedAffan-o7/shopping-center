import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TableData from "./Pages/TableData";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/table" element={<TableData />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
