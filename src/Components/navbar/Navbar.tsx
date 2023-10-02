import React from "react";
import Logo from "./Logo";
import RoutesNav from "./RoutesNav";
import headerImg from "../../assets/industri-karoseri.jpg";

const Navbar = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex px-12 py-6 justify-between items-center">
        <Logo />
        <RoutesNav />
      </div>
    </div>
  );
};

export default Navbar;
