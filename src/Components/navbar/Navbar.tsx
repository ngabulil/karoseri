import Logo from "./Logo";
import RoutesNav from "./RoutesNav";

const Navbar = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex px-12 py-6 justify-between items-center">
        <Logo />
        <RoutesNav />
      </div>
    </div>
  );
};

export default Navbar;
