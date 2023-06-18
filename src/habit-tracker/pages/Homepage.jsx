import React from "react";
import Navbar from "../components/Navbar";
import HabitModal from "../components/HabitModal";
import HabitCard from "../components/HabitCard";
import { UseHabits } from "../contexts/HabitContext";

const Homepage = () => {
  const { HabitsObj } = UseHabits();
  const habitsToShow = HabitsObj.allHabits.filter(({id}) => HabitsObj.habits.includes(id));
  console.log("habitssssss", habitsToShow)

  return (
    <React.Fragment>
      <Navbar />
      <HabitModal />
      <div className="m-[1rem] flex gap-3 flex-wrap justify-left">
        {habitsToShow.map((item) => (
          <HabitCard habit={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Homepage;
