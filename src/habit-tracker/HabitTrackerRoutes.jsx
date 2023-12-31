import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArchivesPage from "./pages/ArchivesPage";
import DetailsPage from "./pages/DetailsPage";
import EditPage from "./pages/EditPage";

const Mcr2Routes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default Mcr2Routes;
