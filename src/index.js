// !IMPORT ZONE
// standard requisite imports
import React from "react";
import ReactDOM from "react-dom/client";
// fonts
import "@fontsource/poppins";
// routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routingObject } from "./routing";
// our providers
import AuthProvider from "./providers/AuthProvider";
import CustomThemesProvider from "./providers/CustomThemesProvider";
// our components
import App from "./components/App";
import Main from "./components/pages/Main/Main";
import Intervention from "./components/pages/Intervention";
import Therapist from "./components/pages/Therapist";
import NameChange from "./components/pages/NameChange";
import Doctor from "./components/pages/Doctor";
import LoginSignup from "./components/pages/LoginSignup/LoginSignup";
import MyAccount from "./components/pages/MyAccount";
import Flowchart from "./components/pages/Flowchart/Flowchart";
import CollectionProvider from "./providers/CollectionProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* // CssBaseline is MUI's version of a CSS Normalize snippet, which applies universal styles to the entire app to normalize some differences in visual rendering across browsers
    docs: https://mui.com/material-ui/react-css-baseline/
    */}
    {/* 
    
    BrowserRouter is the higher-order component that lets us define all the url bar routes our app will accept, defined below as children of BrowserRouter. See README.md for full documentation.
    
    Component documentation here: https://reactrouter.com/en/6.10.0/router-components/browser-router
    
 */}
    {/* //TODO more detail on how providers work
    I have wrapped BrowserRouter in our LoggedInProvider so that it can give context on the user's logged in status to all routes in the app
 */}
    <AuthProvider>
      {/* //TODO explain CollectionProvider literally at all */}
      <CollectionProvider>
        {/* //TODO explain this one too lol */}
        <CustomThemesProvider>
          <BrowserRouter>
            <Routes>
              {/* 
        We've structured our routes (AKA our pages) as nested sub-routes "inside" of App.js. This lets us use the React Router Outlet feature to load universal content in App.js which will be visible on every sub-route (AKA every page). We use this to make the Navbar load identically everywhere.This is why the App Route here is the only one that isn't self closing, and has a </Route> below -- it's containing all our other routes, so the appbar works as desired.
        See comments on app.js for further info. 
        docs: https://reactrouter.com/en/6.10.0/components/outlet
        */}
              <Route element={<App />}>
                <Route path={routingObject.main.route} element={<Main />} />

                <Route
                  path={routingObject.intervention.route}
                  // Intervention ALSO receives a path prop because
                  // react router doesnt directly pass props of Route to the route element
                  // i.e., to have access to the path in the element, it needs the prop directly
                  element={
                    <Intervention path={routingObject.intervention.route} />
                  }
                />

                <Route
                  path={routingObject.therapist.route}
                  element={<Therapist path={routingObject.therapist.route} />}
                />

                <Route
                  path={routingObject.name_change.route}
                  element={
                    <NameChange path={routingObject.name_change.route} />
                  }
                />

                <Route
                  path={routingObject.doctor.route}
                  element={<Doctor path={routingObject.doctor.route} />}
                />

                <Route
                  path={routingObject.login_signup.route}
                  element={<LoginSignup />}
                />

                <Route
                  path={routingObject.my_account.route}
                  element={<MyAccount />}
                />

                <Route
                  path={routingObject.flowchart.route}
                  element={<Flowchart />}
                />
              </Route>

              {/* 
        // TODO: either make this properly fall through to full home page OR make custom error page 
        for now, people will see the toolbar with links to leave*/}
              <Route path="*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </CustomThemesProvider>
      </CollectionProvider>
    </AuthProvider>
  </React.StrictMode>
);
