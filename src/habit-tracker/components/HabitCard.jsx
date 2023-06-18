import {
  faArchive,
  faEdit,
  faPenSquare,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UseHabits } from "../contexts/HabitContext";
import { useLocation } from "react-router-dom";

const HabitCard = ({ habit }) => {
  const { habit: currHabit, id } = habit;
  const { dispatch } = UseHabits();
  const loc = useLocation().pathname;
  return (
    <div className="flex cursor-pointer flex-col justify-between text-white bg-orange-400 w-[20%] h-[8rem]">
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
      </div>}
    </div>
  );
};

export default HabitCard;
