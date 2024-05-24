import Logo from "./Logo";
import RoutesMob from "./RoutesMob";
import RoutesNav from "./RoutesNav";

const Navbar = () => {
  return (
    <header className="bg-slate-200 sticky top-0 z-[2] h-[80px]">
      <nav className="flex px-12 py-6 justify-between items-center mx-auto max-w-8xl sm:px-4">
        <Logo />
        <RoutesMob />
        <RoutesNav />
      </nav>
    </header>
  );
};

export default Navbar;
