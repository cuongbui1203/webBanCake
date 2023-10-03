import { Route, Routes } from "react-router-dom";
import "@/App.css";
import Header from "@/layout/header/Header";
import Home from "@/pages/home/Home";
import CategoryComponent from "./component/category/Category";
import FilmStripContainer from "./component/filmStrip/FilmStrip";
// import ForgotPass from "./modal/forgot/ForgotPass";
// import Home from "@/component/home/home";
function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<>search</>} />
          <Route
            path="/test"
            element={<FilmStripContainer items={[]} width={1500} id={0} />}
          />
          <Route path="/category">
            <Route index element={<></>} />
            <Route path=":id" element={<CategoryComponent />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
