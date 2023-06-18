import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArchivesPage from "./pages/ArchivesPage";

const Mcr2Routes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/archives" element={<ArchivesPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default Mcr2Routes;
