import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Produk from "./Pages/Produk";
import DetailProduk from "./Pages/DetailProduk";

const App: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Navbar></Navbar>
      <main className="mx-auto max-w-[1600px] border-x-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/produk/detail/:id/:name" element={<DetailProduk />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
