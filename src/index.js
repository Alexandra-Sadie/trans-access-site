// !IMPORT ZONE
// standard requisite imports
import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
// fonts
// TODO explain this - theyre never called etc
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routingObject } from "./routing";
// our components
import App from "./components/App";
import Main from "./components/pages/Main/Main";
import Intervention from "./components/pages/Intervention";
import Therapist from "./components/pages/Therapist";
import NameChange from "./components/pages/NameChange";
import Doctor from "./components/pages/Doctor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* // TODO explain */}
    <CssBaseline />
    {/* //TODO explain browserrouter -- can link to documentation */}
    <BrowserRouter>
      <Routes>
        {/* Having all routes be sub-routes of App allows us to use standard components (esp. Navbar) in app
        and have subroutes be visible through the Outlet compoent - see App.js 
        // TODO clarify 
        */}
        <Route path="/" element={<App />}>
          {/* using path="/" in the sub-route makes home fall through to this
          // TODO clarify this also lol
           */}

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

        {/* 
        // TODO: either make this properly fall through to full home page OR make custom error page 
        for now, people will see the toolbar with links to leave*/}
        <Route path="*" element=<App /> />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
