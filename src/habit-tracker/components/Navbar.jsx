import React from "react";
import {
  faAdd,
  faArchive,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { UseHabits } from "../contexts/HabitContext";

const Navbar = () => {
  const navigate = useNavigate();
  const loc = useLocation().pathname;
  const {dispatch} = UseHabits();
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="flex mb-2 sm:mb-0">
        <h1
          onClick={() => navigate("/")}
          className="text-[1.3rem] cursor-pointer no-underline text-grey-darkest hover:text-blue-dark"
        >
          My Habits
        </h1>
        <button onClick={() => dispatch({id: 0, action: "openAdd"})} className="border text-sm font-[500] rounded ml-3 px-1 bg-blue-400 text-white">
          Add an Habit <FontAwesomeIcon icon={faAdd} />
        </button>
      </div>

      <div className="flex items-center gap-8">
        {loc === "/" && (
          <h3
            onClick={() => navigate("/archives")}
            className="text-xl cursor-pointer hover:underline"
          >
            Archives <FontAwesomeIcon className="text-lg" icon={faArchive} />
          </h3>
        )}
        {loc === "/archives" && (
          <h3
            onClick={() => navigate("/")}
            className="text-xl cursor-pointer hover:underline"
          >
            Back to habits <FontAwesomeIcon icon={faStepBackward} />
          </h3>
        )}
        <h3 className="text-xl">{loc === "/" ? "Home" : "Archives"}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
