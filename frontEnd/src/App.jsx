import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import FooterContainer from "./layout/footer";
import HeaderComponent from "./layout/header";
import HomeComponent from "./pages/home";
import CategoryComponent from "./pages/category";
import CheckAuth from "./component/auth";
import CartComponent from "./component/cart";
import UserComponent from "./pages/acc";
import SearchComponent from "./pages/search";
function App() {
  return (
    <>
      <HeaderComponent />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<CheckAuth />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/user/:name" element={<UserComponent />} />
          <Route path="/category/:id?" element={<CategoryComponent />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="*" element={<div>not fount</div>} />
        </Routes>
      </div>
      <FooterContainer />
    </>
  );
}

export default App;
