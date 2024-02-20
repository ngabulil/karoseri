import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Produk from "./Pages/Produk";
import DetailProduk from "./Pages/DetailProduk";
import Perusahaan from "./Pages/Perusahaan";
import LandingPage from "./Pages/LandingPage/LandingPage";

const App: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };
    handleScrollToTop();
    window.addEventListener("beforeunload", handleScrollToTop);
  }, [navigate]);

  return (
    <div className="max-w-[2000px] mx-auto">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path="perusahaan" element={<Perusahaan />} />
          <Route path="produk" element={<Produk />} />
          <Route path="produk/detail/:id/:name" element={<DetailProduk />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
