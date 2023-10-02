import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  let [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));
  }, []);
  const disp = vans.map((elt, ind) => {
    return (
      <Link to={`/vans/${elt.id}`} key={ind} className="flex flex-col gap-2">
        <img
          className="w-full h-96 object-cover rounded-xl"
          src={elt.imageUrl}
          alt="Vans"
        />
        <p className="font-bold text-2xl ">{elt.name}</p>
        <p className="font-medium text-xl">${elt.price}/Day</p>
        <p
          className=" font-semibold text-white rounded-lg w-fit px-5 py-1"
          style={{
            background:
              elt.type === "simple"
                ? "#E17654"
                : elt.type === "rugged"
                ? "#115E59"
                : "black",
          }}
        >
          {elt.type[0].toUpperCase() + elt.type.slice(1)}
        </p>
      </Link>
    );
  });

  return (
    <section className="px-[25%] mt-12 grid grid-cols-2 gap-8">{disp}</section>
  );
}
