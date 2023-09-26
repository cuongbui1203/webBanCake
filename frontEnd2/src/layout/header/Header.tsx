/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useState } from 'react'
import {clsx} from 'clsx';
import { CloseCircleFilled } from "@ant-design/icons";
import styles from './header.module.scss';
import { Badge, Modal, Popover } from 'antd';
import { createSearchParams, useNavigate } from 'react-router-dom';
import LoginModal from '../../modal/login/LoginModal';
import RegisterModal from '../../modal/register/RegisterModal';

function Header() {
  const [modalOpen,setModalOpen] = useState<boolean>(false)
  const [modalContent,setModalContent] = useState<ReactElement>();
  const [searchValue, setSearchValue] = useState<string>("");
  const loginStatus = localStorage.getItem('login')
  const navigate = useNavigate();
  const handleIconClick = ()=>{
    alert("icon");
  }

  const handleSearch = () =>{
    if (searchValue === "") return;
    const data = { search: searchValue };
    navigate({
      pathname: "/search",
      search: `?${createSearchParams(data)}`,
    });
  }
  const handleModeClose = () => {
    setModalContent(<></>);
    setModalOpen(false);
  };
  const handleRegisterOpen = () =>{
    setModalContent(<RegisterModal handleHasAcc={handleLoginOpen} handleClose={function (): void {
      throw new Error('Function not implemented.');
    } } />);

  }
  const handleLoginOpen = () => {
    setModalContent(<LoginModal handleClose={handleModeClose} handleRegister={handleRegisterOpen} />);
    setModalOpen(true);
  };
    
  const handleModalOpen = () =>{
    handleLoginOpen();
  }

  return (
     <div className={styles.headers}>
        <header className={styles.header}>
          <div className={styles.right__header_container}>
            <div
              className={clsx(styles.header_icon, styles.icon__container)}
              onClick={handleIconClick}
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
                value={searchValue}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
              ></input>
              <CloseCircleFilled
                className={styles.removeTextIcon}
                onClick={() => setSearchValue("")}
              />
              <button className={styles.search__btn} onClick={handleSearch}>
                tim kiem
              </button>
            </div>
          </div>
          <div className={styles.left__header_container}>
            <div className={styles.header__account} onClick={handleModalOpen}>
              <img
                src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                alt="account icon"
              />
                login
            </div>
            <Modal
                    // title="Login"
                    open={modalOpen}
                    onOk={handleModeClose}
                    onCancel={handleModeClose}
                    width={820}
                    footer={[]}
                    centered
                    zIndex={5}
                  >
                    {modalContent}
            </Modal>
            <div className={styles.header__home} onClick={handleIconClick}>
              <img
                src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
                alt="home icon"
              />
              trang chủ
            </div>
          </div>
          <div className={styles.header__cart}>
              <Popover content={<></>} trigger="click">
                <Badge count={0} showZero>
                  <img
                    src="	https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                    alt="cart Icon" 
                  />
                </Badge>
              </Popover>
          </div>
        </header>
        <div className={styles.header_bottom_container}> location </div>
      </div>
  )
}

export default Header