/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Checkbox, Form, Input, Spin } from "antd";
import clsx from "clsx";

import styles from "@/assets/style/style.module.scss";
import loginImg from "@/assets/login-icon.png";
interface Props {
  handleClose: () => void;
  handleRegister?: () => void;
  handleForgotPass?: () => void;
}

interface FormReturn {
  email: string;
  password: string;
  remember: boolean;
}

function LoginModal(props: Props) {
  const { handleClose, handleForgotPass, handleRegister } = props;

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  form.setFieldValue("remember", true);
  const onSubmit = (e: FormReturn) => {
    setLoading(true);
    const data = new FormData();
    data.append("email", e.email);
    data.append("password", e.password);
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
                <img src={loginImg} alt="..." className={styles.form__image} />
                <div className={styles.form__image}></div>
              </div>
            </div>
            <div className={styles.form__right}>
              <div className={styles.form__padding_right}>
                <Form
                  action="#"
                  form={form}
                  onFinish={onSubmit}
                  validateTrigger="onSubmit"
                  className={styles.form__login}
                >
                  <h1 className={styles.form__title}>Login</h1>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "ban phair dien email vo",
                      },
                      {
                        required: true,
                        message: "khong dc der trong",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Email"
                      className={clsx(styles.form__email, styles.form__input)}
                    ></Input>
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      type="password"
                      // id='password'
                      placeholder="********"
                      // value={pass}
                      className={clsx(
                        styles.form__input,
                        styles.from__password
                      )}
                    ></Input.Password>
                  </Form.Item>
                  <Input
                    type="submit"
                    value="Login"
                    className={clsx(
                      styles.form__input,
                      styles.form__submit_btn
                    )}
                  ></Input>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox defaultChecked>remember account</Checkbox>
                  </Form.Item>
                </Form>
                <div className={styles.form__forgot}>
                  <div>
                    <a className={styles.form__link} onClick={handleForgotPass}>
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

export default LoginModal;
