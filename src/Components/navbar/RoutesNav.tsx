import { NavLink } from "react-router-dom";

const RoutesNav = () => {
  return (
    <div className="sm:hidden">
      <ul className="flex text-sm text-slate-700 gap-x-2">
        <NavLink
          to="/"
          className={({ isActive }) => `cursor-pointer py-2 px-4 hover:bg-sky-500 hover:text-white rounded-2xl ${isActive && "bg-sky-500 text-white"}`
            }
        >
          Home
        </NavLink>
        <NavLink
          to="/produk"
          className={({ isActive }) => `cursor-pointer py-2 px-4 hover:bg-sky-500 hover:text-white rounded-2xl ${isActive && "bg-sky-500 text-white"}`
            }
        >
          Produk
        </NavLink>
        <NavLink
          to="/perusahaan"
          className={({ isActive }) => `cursor-pointer py-2 px-4 hover:bg-sky-500 hover:text-white rounded-2xl ${isActive && "bg-sky-500 text-white"}`
            }
        >
          Perusahaan
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `cursor-pointer py-2 px-4 hover:bg-sky-500 hover:text-white rounded-2xl ${isActive && "bg-sky-500 text-white"}`
            }
        >
          Hubungi Kami
        </NavLink>
      </ul>
    </div>
  );
};

export default RoutesNav;
