import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
