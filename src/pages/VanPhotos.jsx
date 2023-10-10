import { useOutletContext } from "react-router-dom";

export default function VanPhotos() {
  let { currentVan } = useOutletContext();
  return (
    <section className="mt-8">
      <img className="w-1/3 rounded-lg " src={currentVan.imageUrl} alt="" />
    </section>
  );
}
