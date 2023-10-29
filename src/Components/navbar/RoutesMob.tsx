import React from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi"
const RoutesMob = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="hidden sm:!block">
      <div className="relative" onClick={handleOpen}>
        <GiHamburgerMenu className="w-7 h-7 text-slate-700" />
      </div>
      {open && (
        <div
          className={`fixed min-h-screen min-w-full left-0 top-0 bg-black bg-opacity-60`}
          onClick={handleOpen}
        ></div>
      )}
      <div
        className={`fixed z-0 bg-slate-400 right-0 top-0 transition-width ease-in-out delay-150 duration-1000 ${
          open ? "w-[230px] h-screen" : "w-0 h-screen"
        }`}
      >
        <div className="relative">
          <div
            className="absolute left-4 top-4 text-red-500 bg-slate-600 p-2 cursor-pointer"
            onClick={handleOpen}
          >
            <ImCross />
          </div>
          <div>
            <div className="bg-slate-700 text-white flex justify-center py-5 font-bold min-h-[64px]">
              <p>{open ? "Menu" : ""}</p>
            </div>
            <div className="flex flex-col py-2 gap-y-4">
              <NavLink
                onClick={handleOpen}
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer text-slate-800 py-2 px-4 mx-2 ${
                    isActive && "rounded-md text-black bg-slate-300 font-bold"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={handleOpen}
                to="/produk"
                className={({ isActive }) =>
                  `cursor-pointer text-slate-800 py-2 px-4 mx-2 ${
                    isActive && "rounded-md text-black bg-slate-300 font-bold"
                  }`
                }
              >
                Produk
              </NavLink>
              <NavLink
                onClick={handleOpen}
                to="/perusahaan"
                className={({ isActive }) =>
                  `cursor-pointer text-slate-800 py-2 px-4 mx-2 ${
                    isActive && "rounded-md text-black bg-slate-300 font-bold"
                  }`
                }
              >
                Perusahaan
              </NavLink>
              <NavLink
                onClick={handleOpen}
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer text-slate-800 py-2 px-4 mx-2 ${
                    isActive && "rounded-md text-black bg-slate-300 font-bold"
                  }`
                }
              >
                Hubungi Kami
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesMob;
