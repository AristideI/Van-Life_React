import { NavLink } from "react-router-dom";
export default function VanCard(props) {
  return (
    <NavLink
      to={`${props.id}`}
      className="bg-white w-full p-2 mt-8 rounded-lg flex justify-start items-center gap-4"
    >
      <img
        className="w-1/3 rounded-lg object-cover"
        src={props.img}
        alt="caar"
      />
      <div>
        <p className="font-bold">{props.name}</p>
        <p>{props.price}/day</p>
      </div>
    </NavLink>
  );
}
