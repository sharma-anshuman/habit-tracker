import React from "react";
import { BrowserRouter } from "react-router-dom";
import HabitTrackerRoutes from "./HabitTrackerRoutes";

const HabitTrackerMain = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HabitTrackerRoutes />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default HabitTrackerMain;
