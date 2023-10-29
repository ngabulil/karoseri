import Logo from "./Logo";
import RoutesMob from "./RoutesMob";
import RoutesNav from "./RoutesNav";

const Navbar = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex px-12 py-6 justify-between items-center px-4">
        <Logo />
        <RoutesMob />
        <RoutesNav />
      </div>
    </div>
  );
};

export default Navbar;
