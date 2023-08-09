/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./register.module.scss";
import { handleLoginAPI } from "../../../api/api";

import clsx from "clsx";
import { useState } from "react";
import { DatePicker, Input, Dropdown, Spin, Button, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import FormData from "form-data";
import locale from "antd/es/date-picker/locale/vi_VN";

export default function RegisterModal({ handleClose, handleHasAcc }) {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(1);
  const [validators, setValidators] = useState({
    name: 1,
    dob: 1,
    email: 1,
    password: 1,
    password2: 1,
  });

  const validatorsWarn = {
    name: ["", "không được để trống"],
    dob: ["", "không được để trống"],
    email: ["", "không được để trống"],
    password: ["", "không được để trống"],
    password2: ["", "không được để trống"],
  };

  const items = [
    {
      label: "Nam",
      key: 1,
      icon: <UserOutlined />,
    },
    {
      label: "Nu",
      key: 2,
      icon: <UserOutlined />,
    },
  ];

  const handleMenuClick = (e) => {
    console.log(e);
    setGender(e.key);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const handleSubmit = () => {
    setLoading(true);
    const data = new FormData();
    data.append("email", email);
    data.append("password", pass);
    data.append("name", name);
    data.append("dob", dob);

    console.log(data);
    // console.log(handleLoginAPI(data));
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
                  <h1 className={styles.form__title}>Register account</h1>
                  <div className={styles.input__container}>
                    <Input
                      // size="large"
                      type="text"
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className={clsx(styles.form__input)}
                    ></Input>
                    <span className={styles.input__error}>
                      {validatorsWarn.name[validators.name]}
                    </span>
                  </div>

                  <div
                    className={clsx(
                      styles.form__dob_gen_container,
                      styles.input__container
                    )}
                  >
                    <DatePicker
                      locale={locale}
                      className={clsx(
                        styles.form__input,
                        styles.form__date_picker
                      )}
                      placeholder="ngay sinh"
                      onChange={(date, dateString) => {
                        console.log(date, dateString);
                        setDob(dateString);
                      }}
                    />

                    <Dropdown
                      menu={menuProps}
                      className={styles.form__gender_choses}
                    >
                      <Button className={styles.form__gender_choses_btn}>
                        {gender == 1 ? "nam" : "nu"}
                        <Space className={(styles.form__gender_choses_btn, {})}>
                          <DownOutlined />
                        </Space>
                      </Button>
                    </Dropdown>
                    <span className={styles.input__error}>
                      {validatorsWarn.dob[validators.dob]}
                    </span>
                  </div>
                  <div className={styles.input__container}>
                    <Input
                      type="Email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className={clsx(styles.form__email, styles.form__input)}
                    ></Input>
                    <span
                      className={clsx(styles.input__error, styles.input__email)}
                    >
                      {validatorsWarn.email[validators.email]}
                    </span>
                  </div>
                  <div className={styles.input__container}>
                    <Input
                      type="password"
                      placeholder="password"
                      onChange={(e) => setPass(e.target.value)}
                      value={pass}
                      className={clsx(
                        styles.form__input,
                        styles.from__password
                      )}
                    ></Input>
                    <span
                      className={styles.input__error}
                      styles={{ bottom: "-23px" }}
                    >
                      {validatorsWarn.password[validators.password]}
                    </span>
                  </div>
                  <div className={styles.input__container}>
                    <Input
                      type="password"
                      placeholder="conform password"
                      onChange={(e) => setPass2(e.target.value)}
                      value={pass2}
                      className={clsx(
                        styles.form__input,
                        styles.from__password
                      )}
                    ></Input>
                    <span className={clsx(styles.input__error)}>
                      {validatorsWarn.password2[validators.password2]}
                    </span>
                  </div>
                  <Input
                    type="submit"
                    value="Create"
                    className={clsx(
                      styles.form__input,
                      styles.form__submit_btn
                    )}
                  ></Input>
                </form>
                <div className={styles.form__forgot}>
                  <div>
                    <a className={styles.form__link} onClick={handleHasAcc}>
                      Already have an account
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
