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
    {/* // CssBaseline is MUI's version of a CSS Normalize snippet, which applies universal styles to the entire app to normalize some differences in visual rendering across browsers
    docs: https://mui.com/material-ui/react-css-baseline/
    */}
    <CssBaseline />
    {/* 
    BrowserRouter is a part of React Router - since this is the first point you're seeig React Router, this comment briefly explains what React Router is.
    
    React itself renders a "Single Page App", using only one html page behind the scenes, and using javascript to change what that page looks like. See public/index.html, or README.md to learn more.
    
    This is powerful but takes away the ability for the user to enter URLs to access specific pages of our app, since there is only one webpage loaded.
    
    React Router gives us BACK this URL functionality, by intercepting the load of a new page when the user enters a sub-url on our domain, and sending that data to React instead, to load page and component views itself.
    
    See especially this page of the React Router docs: https://reactrouter.com/en/6.10.0/start/concepts
    
    BrowserRouter is the higher-order component that lets us define all the url bar routes our app will accept, defined below as children of BrowserRouter.
    
    Component documentation here: https://reactrouter.com/en/6.10.0/router-components/browser-router
    //TODO extract some of this to readme.md
 */}
    <BrowserRouter>
      <Routes>
        {/* 
        We've structured our routes (AKA our pages) as nested sub-routes "inside" of App.js. This lets us use the React Router Outlet feature to load universal content in App.js which will be visible on every sub-route (AKA every page). We use this to make the Navbar load identically everywhere.
        See comments on app.js for further info. 
        docs: https://reactrouter.com/en/6.10.0/components/outlet
        */}
        <Route element={<App />}>
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
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
