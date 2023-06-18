import React from "react";
import { UseHabits } from "../contexts/HabitContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const { HabitsObj, dispatch } = UseHabits();
  const currHabit = HabitsObj.allHabits.find(({ id: i }) => i === id);
  console.log(currHabit)
  return (
    <div>
      <div className="flex py-2 px-4 flex-col max-w-[50%] bg-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1>Habit</h1>
          </div>
          <FontAwesomeIcon
            onClick={() => dispatch({ id: 0, action: "closeDetail" })}
            className="cursor-pointer text-2xl"
            icon={faTimes}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm font-[500]">Name</label>
            <h1>{currHabit.habit}</h1>
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Repeat</label>
              <h1>{currHabit.repeat}</h1>
            </div>
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Goal</label>
              <h1>{currHabit.goal}</h1>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Time of day</label>
              <h1>{currHabit.timeOfDay}</h1>
            </div>
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Start Date</label>
              <h1>{currHabit.startDate}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
