/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import styles from "./login.module.scss";
import { useState } from "react";
import { Spin } from "antd";
export default function LoginModal({ handleClose }) {
  //   console.log(styles);
  console.log(handleClose);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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
                  onSubmit={(e) => {
                    console.log(e);
                    handleClose();
                  }}
                >
                  <h1 className={styles.form__title}>Login</h1>
                  <input
                    type="Email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={clsx(styles.form__email, styles.form__input)}
                  ></input>
                  <input
                    type="password"
                    placeholder="********"
                    onChange={(e) => setPass(e.target.value)}
                    className={clsx(styles.form__input, styles.from__password)}
                  ></input>
                  <input
                    type="submit"
                    value="Login"
                    className={clsx(
                      styles.form__input,
                      styles.form__submit_btn
                    )}
                  ></input>
                </form>
                <div className={styles.form__forgot}>
                  <div>
                    <a href="#" className={styles.form__link}>
                      Forgot Password
                    </a>
                  </div>

                  <div>
                    <a href="#" className={styles.form__link}>
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
