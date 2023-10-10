import { useEffect, useState } from "react";
import "../../server";
import VanCard from "../components/VanCard";
export default function HostVans() {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);
  if (!data) {
    return <p>Loading......</p>;
  }
  return (
    <section>
      {data.map((elt) => (
        <VanCard
          key={elt.id}
          id={elt.id}
          name={elt.name}
          price={elt.price}
          img={elt.imageUrl}
          type={elt.type}
          text={elt.description}
        />
      ))}
    </section>
  );
}
