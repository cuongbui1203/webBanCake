import styles from "./miniAccStyles.module.scss";
import { useUserContext } from "../../../state/hook";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { handleLoginAPI } from "../../../api/authApi";

export default function MiniAccComponent() {
  const navigate = useNavigate();
  const [user] = useUserContext();
  const handleShowMoreAcc = () => {
    navigate(`/user/${user.name ? user.name : "test"}`);
  };
  const handleLogout = () => {
    handleLoginAPI();
  };
  const avatarImg = user.avatar ? (
    <img src={user.avatar} alt="..." />
  ) : (
    <UserOutlined />
  );

  return (
    <div className={styles.container}>
      <Avatar size={90} icon={avatarImg} />
      <div>
        <br />
        <label>{user.name ? user.name : "testName"}</label>
        <br />
        <label>Level: {user.level ? user.level : 1}</label>
        <br />
        <label>Rank: {user.rank ? user.rank : "bronze"}</label>
      </div>
      <Button onClick={handleShowMoreAcc}> chi tiet</Button>
      <Button onClick={handleLogout}> dang xuat</Button>
    </div>
  );
}
