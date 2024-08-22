import Navbar from "../../Components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import { useEffect } from "react";
import ModalProduct from "../../Components/ModalProduct/ModalProduct";

const LandingPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ModalProduct />
    </div>
  );
};

export default LandingPage;
