import { useOutletContext } from "react-router-dom";

export default function VanPricing() {
  let { currentVan } = useOutletContext();
  return <h1 className="mt-6 font-bold text-2xl">${currentVan.price}/day</h1>;
}
