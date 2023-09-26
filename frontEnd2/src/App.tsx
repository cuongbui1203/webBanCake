import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header";
// import ForgotPass from "./modal/forgot/ForgotPass";
import Home from "./component/home/home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<>home</>} />
        <Route path="/search" element={<>search</>} />
        <Route path="/test" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
