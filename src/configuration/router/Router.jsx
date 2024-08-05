import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../components/views/Home";
import Landing from "../../components/views/Landing";
import ProjectDetail from "../../components/views/ProjectDetail"; 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/projects/:projectName" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;