// !IMPORT ZONE
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <>
      {/* //TODO explain why/how we're just having navbar and outlet here
       */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
