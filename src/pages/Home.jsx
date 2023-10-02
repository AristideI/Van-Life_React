import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="px-[25%] mt-12 flex flex-col justify-center items-center gap-4">
      <p className="font-semibold text-3xl text-center">
        You got the travel plans, we got the travel vans.
      </p>
      <p className="text-lg text-center mt-4">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <img
        className="w-full h-80 object-cover object-center rounded-lg"
        src="/van3.jpg"
        alt="Van"
      />
      <Link
        className="text-center bg-[#FF8C38] font-semibold text-2xl px-28 rounded-lg py-2 pro"
        to="/vans"
      >
        Find Your Van
      </Link>
    </section>
  );
}
