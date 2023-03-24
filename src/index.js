import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routingObject } from "./routing";
import Main from "./components/pages/Main";
import SecondPage from "./components/pages/SecondPage";
import Intervention from "./components/pages/Intervention";
import Therapist from "./components/pages/Therapist";
import NameChange from "./components/pages/NameChange";
import Doctor from "./components/pages/Doctor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        {/* Having all routes be sub-routes of App allows us to use standard components (esp. Navbar) in app
        and have subroutes be visible through the Outlet compoent - see App.js */}
        <Route path="/" element={<App />}>
          {/* using path="/" in the sub-route makes home fall through to this */}
          <Route path={routingObject.main.route} element={<Main />} />
          <Route
            path={routingObject.intervention.route}
            element={<Intervention />}
          />
          <Route path={routingObject.therapist.route} element={<Therapist />} />
          <Route
            path={routingObject.name_change.route}
            element={<NameChange />}
          />
          <Route path={routingObject.doctor.route} element={<Doctor />} />
        </Route>
        {/* TODO: either make this properly fall through to full home page OR make custom error page 
        for now, people will see the toolbar with links to leave*/}
        <Route path="*" element=<App /> />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
