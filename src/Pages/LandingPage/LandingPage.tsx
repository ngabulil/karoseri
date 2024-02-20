import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-[1600px] border-x-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
