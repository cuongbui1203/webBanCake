/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./login.module.scss";
import { handleLoginAPI } from "../../../api/authApi";

import clsx from "clsx";
import { useState } from "react";
import { Input, Spin } from "antd";
import FormData from "form-data";

export default function LoginModal({
  handleClose,
  handleRegister,
  handleChangePass,
}) {
  //   console.log(styles);
  // console.log(handleClose);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    setLoading(true);
    const data = new FormData();
    data.append("email", email);
    data.append("password", pass);
    console.log(data);
    console.log(handleLoginAPI(data));
    setLoading(false);
    handleClose();
  };
  return (
    <>
      <Spin spinning={loading}>
        <div className={styles.from}>
          <div className={styles.form__box}>
            <div className={styles.form__left}>
              <div className={styles.form__padding}>
                <img
                  src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png"
                  alt="..."
                  className={styles.form__image}
                />
                <div className={styles.form__image}></div>
              </div>
            </div>
            <div className={styles.form__right}>
              <div className={styles.form__padding_right}>
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  className={styles.form__login}
                >
                  <h1 className={styles.form__title}>Login</h1>
                  <Input
                    type="Email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={clsx(styles.form__email, styles.form__input)}
                  ></Input>
                  <Input
                    type="password"
                    placeholder="********"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    className={clsx(styles.form__input, styles.from__password)}
                  ></Input>
                  <Input
                    type="submit"
                    value="Login"
                    className={clsx(
                      styles.form__input,
                      styles.form__submit_btn
                    )}
                  ></Input>
                </form>
                <div className={styles.form__forgot}>
                  <div>
                    <a className={styles.form__link} onClick={handleChangePass}>
                      Forgot Password
                    </a>
                  </div>

                  <div>
                    <a className={styles.form__link} onClick={handleRegister}>
                      Create your account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
}
