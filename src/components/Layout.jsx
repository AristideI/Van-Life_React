import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  let activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <>
      <header className=" px-[25%] mt-8 flex justify-between items-center">
        <NavLink className="font-bold font-serif text-2xl" to="/">
          Van Life
        </NavLink>
        <nav className="flex justify-between items-center gap-4 font-bold text-xl ">
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyles : null;
            }}
            className="hover:underline"
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyles : null;
            }}
            className="hover:underline"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyles : null;
            }}
            className="hover:underline"
            to="/vans"
          >
            Vans
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
