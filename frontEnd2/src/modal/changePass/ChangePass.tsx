import { Spin, Input, Form } from "antd";
import clsx from "clsx";

import styles from "@/assets/style/style.module.scss";
import { useState } from "react";

interface Props {
  handleClose: () => void;
  handleBack?: () => void;
}
interface FormReturn {
  currentPass: string;
  newPass: string;
  confirmNewPass: string;
}

function ChangePass(props: Props) {
  const { handleClose } = props;
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormReturn) => {
    setLoading(true);
    const data = new FormData();
    data.append("password", e.newPass);
    // console.log(handleLoginAPI(data));
    setLoading(false);
    handleClose();
  };

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
                action="#"
                onFinish={handleSubmit}
                className={styles.form__login}
              >
                <h1 className={styles.form__title}>Change Password</h1>
                <Form.Item
                  name="currentPass"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "không được để trống",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="current Password"
                    className={clsx(styles.form__input)}
                  ></Input.Password>
                </Form.Item>
                <Form.Item
                  name="newPass"
                  hasFeedback
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
                >
                  <Input.Password
                    placeholder="new Password"
                    className={clsx(styles.form__input)}
                  ></Input.Password>
                </Form.Item>
                <Form.Item
                  name="confirmNewPass"
                  hasFeedback
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
                    placeholder="confirm new Password"
                    className={clsx(styles.form__input)}
                  ></Input.Password>
                </Form.Item>
                <Input
                  type="submit"
                  value="Login"
                  className={clsx(styles.form__input, styles.form__submit_btn)}
                ></Input>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
}

export default ChangePass;
