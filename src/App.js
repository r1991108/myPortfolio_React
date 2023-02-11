import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/header-component";
import NavComponent from "./components/nav-component";
import HomeComponent from "./components/home-component";
import CertificationComponent from "./components/certification-component";
import ContactComponent from "./components/contact-component";
import PracticeComponent from "./components/practice-component";

function App() {
  return (
    <>
      <HeaderComponent />
      <NavComponent />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route
          exact
          path="/certification"
          element={<CertificationComponent />}
        />
        <Route
          exact
          path="/contact"
          element={<ContactComponent />}
        />

        <Route
          exact
          path="/practice"
          element={<PracticeComponent />}
        />
      </Routes>
    </>
  );
}

export default App;
