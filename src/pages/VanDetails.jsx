import { useOutletContext } from "react-router-dom";

export default function VanDetails() {
  let { currentVan } = useOutletContext();
  return (
    <section className="mt-6 flex flex-col gap-3">
      <p>
        <span className="font-bold">Name: </span>
        {currentVan.name}
      </p>
      <p>
        <span className="font-bold">Category: </span>
        {currentVan.type}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {currentVan.description}
      </p>
      <p>
        <span className="font-bold">Visibility: </span>
        Public
      </p>
    </section>
  );
}
