// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchSpaceflights from "./components/FetchSpaceflights";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceflightDetails from "./components/SpaceflightDetails";
import CustomNavbar from "./components/Navbar";
import CustomFooter from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <FetchSpaceflights />{" "}
            </>
          }
        />
        <Route
          path="/spaceflight-details/:spaceId"
          element={<SpaceflightDetails />}
        />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
