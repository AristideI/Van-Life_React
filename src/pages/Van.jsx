import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Van() {
  const params = useParams();
  let [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div>
      <section className="px-[25%] my-12">
        {van ? (
          <section className="flex flex-col gap-8">
            <img
              className="w-full h-[30rem] object-cover"
              src={van.imageUrl}
              alt=""
            />
            <p
              className=" font-semibold text-2xl text-white rounded-lg w-fit px-12 py-2"
              style={{
                background:
                  van.type === "simple"
                    ? "#E17654"
                    : van.type === "rugged"
                    ? "#115E59"
                    : "black",
              }}
            >
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </p>
            <p className="font-bold text-4xl">{van.name}</p>
            <p className="font-semibold text-2xl">${van.price}/day</p>
            <p className="font-semibold text-xl">{van.description}</p>
            <p className="font-bold text-white bg-[#E17654] py-2 text-center text-2xl rounded-lg">
              Rent This Van
            </p>
          </section>
        ) : (
          <p className="font-semibold text-4xl">Loading.....</p>
        )}
      </section>
    </div>
  );
}
