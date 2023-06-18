import React from "react";
import Navbar from "../components/Navbar";
import { UseHabits } from "../contexts/HabitContext";
import HabitCard from "../components/HabitCard";

const ArchivesPage = () => {
  const { HabitsObj } = UseHabits();
  const currArchives = HabitsObj.allHabits.filter(({ id }) =>
    HabitsObj.archives.includes(id)
  );
  console.log("In Archives", HabitsObj);
  return (
    <React.Fragment>
      <Navbar />
      <div className="m-[1rem] flex gap-3 flex-wrap justify-left">
        {currArchives.map((item) => (
          <HabitCard habit={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ArchivesPage;
