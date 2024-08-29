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
import CustomThemesProvider from "./providers/CustomThemesProvider/CustomThemesProvider";
import CollectionProvider from "./providers/CollectionProvider";
// our components
import App from "./components/App";
import Main from "./components/pages/Main/Main";
import Intervention from "./components/pages/Intervention";
import Therapist from "./components/pages/Therapist";
import NameChange from "./components/pages/NameChange";
import Doctor from "./components/pages/Doctor";
import LoginSignup from "./components/pages/LoginSignup/LoginSignup";
import MyAccount from "./components/pages/MyAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* We have our app nested within a series of "Providers". This is a common way to structure react's useContext hook. UseContext is a tool used to counteract the need for "prop drilling" when you have certain React States or Javascript functions, variables, etc, that you want the entire app to have access to. (For example, we use this to track whether a user is logged in, or the currently selected theme.)

    Without useContext, we would have to define these "props" from our parent component, App.js, to every single child component and subcomponent that wants to call them, as specified here:
    https://react.dev/learn/passing-props-to-a-component

    It would be overly cumbersome to put this prop passing in every component that needs to access, for example, our basic theme, so instead we define states like theme and logged-in status in Providers, and use React's useContext hook to call them when needed in children components. Effectively, this lets us access these states/props when desired, without having to manually pass every prop to every child component ever.

    This docs page explains how useContext works in detail, and has a nice writeup on what prop drilling is and how useContext avoids it: https://react.dev/learn/passing-data-deeply-with-context
    */}
    {/*
    I have wrapped BrowserRouter in our LoggedInProvider so that it can give context on the user's logged in status to all routes in the app
 */}
    {/* AuthProvider contains our logic to track whether the user is logged in or not, as well as the functions that log them in our out, and create a new user. */}
    <AuthProvider>
      {/* //TODO explain CollectionProvider literally at all */}
      <CollectionProvider>
        {/* //TODO explain this one too lol */}
        {/* CustomThemesProvider contains the custom themes we have made, as well as logic to track the active theme and let the user switch between light and dark mode themes. */}
        <CustomThemesProvider>
          {/* BrowserRouter is the higher-order component that lets us define all the url bar routes our app will accept, defined below as children of BrowserRouter. See README.md for full documentation.
          Component documentation here: https://reactrouter.com/en/6.10.0/router-components/browser-router*/}
          <BrowserRouter>
            <Routes>
              {/* We've structured our routes (AKA our pages) as nested sub-routes "inside" of App.js. This lets us use the React Router Outlet feature to load universal content in App.js which will be visible on every sub-route (AKA every page). We use this to make the Navbar load identically everywhere.
              See comments on app.js for further info. 
              docs: https://reactrouter.com/en/6.10.0/components/outlet */}
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
              </Route>

              {/* // TODO: either make this properly fall through to full home page OR make custom error page 
              for now, people will see the toolbar with links to leave*/}
              {/* This is a common way to make an "error" page. By defining the path as "*", this route will render if the url reads anything other than the defined paths. In practice, this means that if the user accidentally navigates to, for example, "/therapistttt" instead of "/therapist", they will be redirected to the defined element. We have not yet made a custom error page, and this is not redirecting properly to the home page, so for the moment it renders a blank page, with the toolbar visible so they can click to navigate to the correct page. */}
              <Route path="*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </CustomThemesProvider>
      </CollectionProvider>
    </AuthProvider>
  </React.StrictMode>
);
