import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
