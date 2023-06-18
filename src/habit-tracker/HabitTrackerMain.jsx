import React from "react";
import { BrowserRouter } from "react-router-dom";
import HabitTrackerRoutes from "./HabitTrackerRoutes";
import HabitContext from "./contexts/HabitContext";

const HabitTrackerMain = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HabitContext>
          <HabitTrackerRoutes />
        </HabitContext>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default HabitTrackerMain;
