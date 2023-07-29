import styles from "./App.module.css";
import FooterContainer from "./layout/footer";
import HeaderComponent from "./layout/header";
function App() {
  return (
    <>
      <HeaderComponent />
      <div className={styles.container}></div>
      <FooterContainer />
    </>
  );
}

export default App;
