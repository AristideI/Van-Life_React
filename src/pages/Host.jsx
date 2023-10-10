import { Outlet, NavLink } from "react-router-dom";
export default function HostLayout() {
  let activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <section className="px-[25%] my-12">
      <nav className="flex items-center gap-4">
        <NavLink
          className="hover:underline hover:font-bold transition-all duration-300"
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to="."
          end
        >
          Dashbord
        </NavLink>
        <NavLink
          className="hover:underline hover:font-bold transition-all duration-300"
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className="hover:underline hover:font-bold transition-all duration-300"
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className="hover:underline hover:font-bold transition-all duration-300"
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}
