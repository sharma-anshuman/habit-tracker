import React from "react";
import { UseHabits } from "../contexts/HabitContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DetailsModal = () => {
  const { HabitsObj, dispatch } = UseHabits();

  return (
    <div>
      <div
        className={`${
          !HabitsObj.showModal ? "hidden" : ""
        } flex py-2 px-4 flex-col max-w-[50%] bg-gray-200`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1>New Habit</h1>
            <h3>Enter the details</h3>
          </div>
          <FontAwesomeIcon
            onClick={() => dispatch({ id: 0, action: "close" })}
            className="cursor-pointer text-2xl"
            icon={faTimes}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm font-[500]">Name</label>
            <input
              placeholder="Practice coding"
              className="px-1 py-[2px]"
              type="text"
              required
            />
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Repeat</label>
              <select className="p-[2px] text-sm w-full">
                {repeat.map((item) => (
                  <option className="w-full" value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Goal</label>
              <select className="p-[2px] text-sm w-full">
                {goal.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Time of day</label>
              <select className="p-[2px] text-sm w-full">
                {timeOfDay.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="w-[45%]">
              <label className="text-sm font-[500]">Start Date</label>
              <select className="p-[2px] text-sm w-full">
                {startDate.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <hr />
          <input
            type="submit"
            className="text-white w-fit px-2 mt-4 rounded font-[500] bg-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
