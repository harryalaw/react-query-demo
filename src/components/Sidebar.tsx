import { NavLink } from "react-router-dom";
import { TopMeals } from "./TopMeals";

export function Sidebar() {
  return (
    <div className="border-r px-4 pt-4 w-56 bg-[#54D1DB] flex-shrink-0">
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/meal/new"> New meal </NavLink>
          </li>
        </ul>
      </nav>
      <br />
      <TopMeals />
    </div>
  );
}

