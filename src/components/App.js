// !IMPORT ZONE
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <>
      {/* Using React Router's Outlet feature (see index.js), we can render the navbar, and below it, any route/page we want as a child of App.js. In practice, this puts the navbar on every page.
      See comments on index.js for further info. 
      docs: https://reactrouter.com/en/6.10.0/components/outlet
       */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
