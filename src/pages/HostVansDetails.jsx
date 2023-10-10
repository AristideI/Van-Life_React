import { Outlet, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../server";
export default function HostVansDetails() {
  let [currentVan, setCurrentVan] = useState(null);
  let { id } = useParams();
  let activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);
  if (!currentVan) {
    return <p>Loading......</p>;
  }
  return (
    <section className="mt-10">
      <NavLink to="../vans" className="">
        {"<-- Go Back"}
      </NavLink>
      <section className="mt-5 bg-white px-6 py-4 rounded-lg">
        <section className="flex justify-start items-center gap-5">
          <img
            className="w-1/4 object-cover"
            src={currentVan.imageUrl}
            alt="main photo"
          />
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="text-lg bg-orange-300 grid place-content-center rounded-lg py-1 px-7 w-fit">
              {currentVan.type}
            </p>
            <p className="font-bold text-xl">{currentVan.name}</p>
            <p className="font-bold">${currentVan.price}/day</p>
          </div>
        </section>
        <section className="flex items-center gap-4 mt-4">
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyles : null;
            }}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyles : null;
            }}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyles : null;
            }}
            to="photos"
          >
            Photos
          </NavLink>
        </section>
        <Outlet context={{ currentVan }} />
      </section>
    </section>
  );
}
