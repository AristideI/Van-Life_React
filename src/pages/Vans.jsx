import { useEffect, useState } from "react";

export default function Vans() {
  let [vans, setVans] = useState(null);
  console.log(vans);
  useEffect(() => {
    fetch("/api/vans")
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans));
  }, []);

  const disp = vans.map((elt) => {
    return <section>Pro</section>;
  });

  return <section>{disp}</section>;
}
