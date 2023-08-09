import { Link, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import FooterContainer from "./layout/footer";
import HeaderComponent from "./layout/header";
import HomeComponent from "./pages/home";
function App() {
  return (
    <>
      <HeaderComponent />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route
            path="/cart"
            element={
              <>
                <p>cart</p>
                <Link to={"/"}>home</Link>
              </>
            }
          />
          <Route
            path="/user"
            element={
              <>
                <p>user</p>
                <Link to={"/"}>home</Link>
              </>
            }
          />
        </Routes>
      </div>
      <FooterContainer />
    </>
  );
}

export default App;
