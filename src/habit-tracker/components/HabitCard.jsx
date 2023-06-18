import {
  faArchive,
  faEdit,
  faInfo,
  faPenSquare,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UseHabits } from "../contexts/HabitContext";
import { useLocation, useNavigate } from "react-router-dom";

const HabitCard = ({ habit }) => {
  const { habit: currHabit, id } = habit;
  const navigate = useNavigate();
  const { dispatch } = UseHabits();
  const loc = useLocation().pathname;
  return (
    <div className="flex flex-col justify-between text-white bg-orange-400 w-[20%] h-[8rem]">
      <h1 className="text-[1.4rem] text-white p-1 pl-2">{currHabit}</h1>
      {loc !== '/archives' && <div className="flex gap-3 p-1">
        <FontAwesomeIcon
          className="cursor-pointer hover:font-[700]"
          icon={faPencil}
        />
        <FontAwesomeIcon
          onClick={() => dispatch({ id: id, action: "mta" })}
          className="cursor-pointer hover:font-[700]"
          icon={faArchive}
        />
        <FontAwesomeIcon
          onClick={() => dispatch({ id: id, action: "delete" })}
          className="cursor-pointer hover:font-[700]"
          icon={faTrash}
        />
        <FontAwesomeIcon
          onClick={() => navigate(`/details/${id}`)}
          className="cursor-pointer hover:font-[700]"
          icon={faInfo}
        />
      </div>}
    </div>
  );
};

export default HabitCard;
