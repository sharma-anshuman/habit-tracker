import React, { useState } from "react";
import { UseHabits } from "../contexts/HabitContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const repeat = ["Daily", "Twice a day", "Weekly", "Monthly", "Yearly"];
  const goal = ["1 times Daily", "2 times daily", "3 times daily"];
  const timeOfDay = [
    "Any time",
    "Morning",
    "Afternoon",
    "Evening",
    "Late Evening",
    "Night",
  ];
  const {id} = useParams();
  const { HabitsObj, dispatch } = UseHabits();
  const currHabit = HabitsObj.allHabits.find(({ id: i }) => i === id);
  console.log(currHabit);

  const startDate = ["Today", "Tomorrow", "After 2 days", "After 3 days"];
  const [goalVal, setGoal] = useState(currHabit.goal);
  const [repeatVal, setRepeat] = useState(currHabit.repeat);
  const [timeVal, setTime] = useState(currHabit.timeOfDay);
  const [startVal, setStart] = useState(currHabit.startDate);
  const [habitVal, setHabit] = useState(currHabit.habit);

  const submitHandler = (event) => {
    dispatch({
      id: {
        id: currHabit.id,
        habit: habitVal,
        repeat: repeatVal,
        goal: goalVal,
        timeOfDay: timeVal,
        startDate: startVal,
      },
      action: "edit",
    });
    dispatch({ id: 0, action: "editClose" });
    event.preventDefault();
  };

  return (
    <div>
      <div
        className="flex py-2 px-4 flex-col max-w-[50%] bg-gray-200"
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

        <div>
          <form onSubmit={submitHandler} className="flex flex-col">
            <div className="flex flex-col">
              <label className="text-sm font-[500]">Name</label>
              <input
                placeholder="Practice coding"
                className="px-1 py-[2px]"
                type="text"
                onChange={(e) => setHabit(e.target.value)}
                value={habitVal}
                required
              />
            </div>

            <div className="flex justify-between">
              <div className="w-[45%]">
                <label className="text-sm font-[500]">Repeat</label>
                <select
                  onChange={(e) => setRepeat(e.target.value)}
                  value={repeatVal}
                  className="p-[2px] text-sm w-full"
                >
                  {repeat.map((item) => (
                    <option className="w-full" value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[45%]">
                <label className="text-sm font-[500]">Goal</label>
                <select
                  onChange={(e) => setGoal(e.target.value)}
                  value={goalVal}
                  className="p-[2px] text-sm w-full"
                >
                  {goal.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-[45%]">
                <label className="text-sm font-[500]">Time of day</label>
                <select
                  onChange={(e) => setTime(e.target.value)}
                  value={timeVal}
                  className="p-[2px] text-sm w-full"
                >
                  {timeOfDay.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="w-[45%]">
                <label className="text-sm font-[500]">Start Date</label>
                <select
                  onChange={(e) => setStart(e.target.value)}
                  value={startVal}
                  className="p-[2px] text-sm w-full"
                >
                  {startDate.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <hr />
            <input
              type="submit"
              value="Edit"
              className="text-white w-fit px-2 mt-4 rounded font-[500] bg-blue-400"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
