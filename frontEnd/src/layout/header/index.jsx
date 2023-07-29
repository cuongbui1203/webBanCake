import { useState } from "react";
import styles from "./header.module.css";
import clsx from "clsx";
import { Modal, Badge, Avatar } from "antd";
import LoginModal from "../modal/login";
export default function HeaderComponent() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModelOpen = (e) => {
    if (e.target.className === styles.header__account) {
      setModalOpen(true);
      console.log("open login form");
      // console.log(e.target.className === styles.header__account);
    }
  };

  const handleModeClose = () => {
    setModalOpen(false);
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
              tài khoản
              <Modal
                // title="Login"
                open={modalOpen}
                onOk={handleModeClose}
                onCancel={handleModeClose}
                width={720}
                footer={[]}
                centered
              >
                <LoginModal handleClose={handleModeClose} />
              </Modal>
            </div>
            <div className={styles.header__home}>
              <img
                src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
                alt="home icon"
              />
              trang chủ
            </div>
            <div className={styles.header__cart}>
              <Badge count={0} showZero>
                {/* <Avatar shape="square" size="large" /> */}
                <img
                  src="	https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                  alt="cart Icon"
                  className=""
                />
              </Badge>
              {/* <span className={styles.count_item_in_cart}>0</span> */}
            </div>
          </div>
        </header>
        <div className={styles.header_bottom_container}>location</div>
      </div>
    </>
  );
}
