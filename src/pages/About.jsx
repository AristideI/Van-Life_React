import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="px-[25%] my-12">
      <img
        className="w-full h-96 object-cover object-center rounded-lg"
        src="/van2.jpg"
        alt="Van"
      />
      <p className="font-bold text-3xl mt-4">
        Don’t squeeze in a sedan when you could relax in a van.
      </p>
      <p className="mt-4">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p className="mt-6">
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>

      <div className="bg-[#FFCC8D] py-10 px-8 flex flex-col gap-6 mt-12 rounded-xl">
        <p className="font-bold text-2xl w-2/3">
          Your destination is waiting. Your van is ready.
        </p>
        <Link
          className="text-center bg-black text-white w-fit font-semibold text-2xl px-28 rounded-lg py-2 pro"
          to="/vans"
        >
          Explore Our Vans
        </Link>
      </div>
    </section>
  );
}
