import styles from "./header.module.css";
import LoginModal from "../modal/login";
import RegisterModal from "../modal/register";
import ChangePasswordComponent from "../modal/changePass";
import MiniCartComponent from "../../component/cart/mini";

import { useState } from "react";
import clsx from "clsx";
import { Modal, Badge, Popover, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const [modalContent, setModalContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const loginStatus = JSON.parse(localStorage.getItem("login"));
  const content = (
    <div className={styles.miniCartPopover_container}>
      <MiniCartComponent />
      <div>
        <Button>chi tiet</Button>
      </div>
    </div>
  );

  const handleModeClose = () => {
    setModalOpen(false);
  };
  const handleHasAcc = () => {
    setModalContent(<LoginModal handleClose={handleModeClose} />);
  };
  const handleModelOpen = (e) => {
    if (e.target.className === styles.header__account) {
      setModalContent(<LoginModal handleClose={handleModeClose} />);
      setModalOpen(true);
    }
    if (e.target.innerText === "Create your account") {
      setModalContent(
        <RegisterModal
          handleClose={handleModeClose}
          handleHasAcc={handleHasAcc}
        />
      );
      console.log("create account");
    }
    if (e.target.innerText === "Forgot Password") {
      setModalContent(
        <ChangePasswordComponent
          handleClose={handleModeClose}
          handleBack={handleHasAcc}
        />
      );
      console.log("forgot password");
    }
  };

  return (
    <>
      <div className={styles.headers}>
        <header className={styles.header}>
          <div className={styles.right__header_container}>
            <div
              className={clsx(styles.header_icon, styles.icon__container)}
              onClick={() => alert("icon")}
            >
              <img
                src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png"
                alt="tikiLogo"
              />
            </div>

            <div className={styles.search_container}>
              <img
                src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                className={styles.search__icon}
                alt="icon search"
              />
              <input
                type="text"
                placeholder="search"
                className={styles.search__input}
              ></input>
              <button className={styles.search__btn}>tim kiem</button>
            </div>
          </div>
          <div className={styles.left__header_container}>
            <div className={styles.header__account} onClick={handleModelOpen}>
              <img
                src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                alt="account icon"
              />
              {loginStatus !== 1 ? (
                <>
                  Login
                  <Modal
                    // title="Login"
                    open={modalOpen}
                    onOk={handleModeClose}
                    onCancel={handleModeClose}
                    width={720}
                    footer={[]}
                    centered
                    zIndex={5}
                  >
                    {modalContent}
                  </Modal>
                </>
              ) : (
                <div
                  onClick={() => {
                    navigate("/user");
                  }}
                >
                  tai khoan
                </div>
              )}
            </div>
            <div className={styles.header__home}>
              <img
                src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
                alt="home icon"
              />
              trang chủ
            </div>
            <div className={styles.header__cart}>
              <Popover content={content} trigger={"click"}>
                <Badge count={0} showZero>
                  <img
                    src="	https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                    alt="cart Icon"
                    className=""
                  />
                </Badge>
              </Popover>
            </div>
          </div>
        </header>
        <div className={styles.header_bottom_container}>location</div>
      </div>
    </>
  );
}
