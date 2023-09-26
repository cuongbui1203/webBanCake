/* eslint-disable no-control-regex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./register.module.scss";

import clsx from "clsx";
import { useState } from "react";
import { DatePicker, Input, Dropdown, Spin, Button, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import FormData from "form-data";
import locale from "antd/es/date-picker/locale/vi_VN";
// import { handleLoginAPI } from "../../../api/api";

export default function RegisterModal({ handleClose, handleHasAcc }) {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(1);
  const [validators, setValidators] = useState({
    name: 0,
    dob: 0,
    email: 0,
    password: 0,
    password2: 0,
  });

  const validatorsWarn = {
    name: ["", "không được để trống"],
    dob: ["", "không được để trống"],
    email: ["", "không được để trống", "email không hợp lệ"],
    password: [
      "",
      "không được để trống",
      "tối thiểu 8 ký tự, chứa ít nhất 1 chữ cái và 1 chữ số",
    ],
    password2: ["", "không được để trống", "cần nhập trùng với password"],
  };

  const validate = () => {
    const regexMail = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    const regexPass = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    let res = 0;
    setValidators({
      name: name.length === 0 ? 1 : 0,
      dob: dob.length === 0 ? 1 : 0,
      email: email.length === 0 ? 1 : !regexMail.test(email) ? 2 : 0,
      password: pass.length === 0 ? 1 : !regexPass.test(pass) ? 2 : 0,
      password2: pass2.length === 0 ? 1 : pass2 === pass ? 0 : 2,
    });
    res += validators.name;
    res += validators.dob;
    res += validators.email;
    res += validators.password;
    res += validators.password2;
    return res === 0;
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
    if (validate() !== 0) return;
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

  // useEffect(() => validate());

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
                  action=""
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
                        {gender === 1 ? "nam" : "nu"}
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
