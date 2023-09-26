import {
  Button,
  DatePicker,
  Dropdown,
  Form,
  Input,
  MenuProps,
  Space,
  Spin,
} from "antd";
import { useState } from "react";
import clsx from "clsx";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/vi_VN";
import type { Dayjs } from "dayjs";

import styles from "@/assets/style/style.module.scss";

interface Props {
  handleHasAcc: () => void;
  handleClose: () => void;
}

interface FormReturn {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
  dob: Dayjs;
  gender: number;
}

const RegisterModal = (props: Props) => {
  const { handleClose, handleHasAcc } = props;
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(1);
  const [form] = Form.useForm();

  const handleSubmit = (e: FormReturn) => {
    // setLoading(true);
    console.log(e);
    const data = new FormData();
    data.append("name", e.name);
    data.append("email", e.email);
    data.append("password", e.password);
    data.append("password_confirm", e.password_confirm);
    data.append("gender", e.gender.toString());
    data.append("dob", e.dob.format("DD/MM/YYYY"));
    console.log(...data);
    setLoading(false);
    handleClose();
  };

  const onClick: MenuProps["onClick"] = ({ key }) => {
    console.log(key);
    setGender(parseInt(key));
    form.setFieldValue("gender", parseInt(key));
  };

  const items: MenuProps["items"] = [
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
    {
      label: "Khac",
      key: 3,
      icon: <UserOutlined />,
    },
  ];

  return (
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
              <Form
                action=""
                form={form}
                onFinish={handleSubmit}
                validateTrigger="onSubmit"
                className={styles.form__login}
                // initialValues={{}}
              >
                <h1 className={styles.form__title}>Register account</h1>
                <Form.Item
                  name="name"
                  className={styles.input__container}
                  rules={[
                    {
                      required: true,
                      message: "không được để trống",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="name"
                    className={clsx(styles.form__input)}
                  ></Input>
                </Form.Item>

                <div
                  className={clsx(
                    styles.form__dob_gen_container,
                    styles.input__container
                  )}
                >
                  <Form.Item
                    className={styles.form__date_picker}
                    rules={[
                      {
                        required: true,
                        message: "không được để trống",
                      },
                    ]}
                    name="dob"
                  >
                    <DatePicker
                      format={"DD-MM-YYYY"}
                      locale={locale}
                      className={styles.form__input}
                      placeholder="ngay sinh"
                      onChange={(date, dateString) => {
                        console.log(date, dateString);
                        // setDob(dateString);
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    className={clsx(styles.form__date_picker)}
                    rules={[
                      {
                        required: true,
                        message: "không được để trống",
                      },
                    ]}
                    name="gender"
                    initialValue={1}
                  >
                    <Dropdown
                      menu={{ items, onClick }}
                      className={styles.form__gender_choses}
                    >
                      <Button className={styles.form__gender_choses_btn}>
                        {gender === 1 ? "nam" : gender === 2 ? "nu" : "khac"}
                        <Space className={styles.form__gender_choses_btn}>
                          <DownOutlined />
                        </Space>
                      </Button>
                    </Dropdown>
                  </Form.Item>
                </div>
                <Form.Item
                  name="email"
                  className={styles.input__container}
                  rules={[
                    {
                      required: true,
                      message: "không được để trống",
                    },
                    {
                      type: "email",
                      message: "email không hợp lệ",
                    },
                  ]}
                >
                  <Input
                    type="Email"
                    placeholder="Email"
                    className={clsx(styles.form__email, styles.form__input)}
                  ></Input>
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "không được để trống",
                    },
                    {
                      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "tối thiểu 8 ký tự, chứa ít nhất 1 chữ cái và 1 chữ số",
                    },
                  ]}
                  className={styles.input__container}
                  hasFeedback
                >
                  <Input.Password
                    style={{ background: "#f2f2f2" }}
                    placeholder="password"
                    className={clsx(styles.form__input, styles.from__password)}
                  ></Input.Password>
                </Form.Item>
                <Form.Item
                  name="password_confirm"
                  dependencies={["password"]}
                  hasFeedback
                  className={styles.input__container}
                  rules={[
                    {
                      required: true,
                      message: "không được để trống",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("cần nhập trùng với password")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="confirm password"
                    // onChange={(e) => setPass2(e.target.value)}
                    // value={pass2}
                    className={clsx(styles.form__input, styles.from__password)}
                  ></Input.Password>
                </Form.Item>
                <Input
                  type="submit"
                  value="Create"
                  className={clsx(styles.form__input, styles.form__submit_btn)}
                ></Input>
              </Form>
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
  );
};

export default RegisterModal;
