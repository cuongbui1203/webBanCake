import net from "./axios";

const handleLogout = async () => {
  try {
    const res = await net.get("/user/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const handleGetUserInfo = async () => {
  try {
    const res = await net.get("/user/me");
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const handleLoginAPI = async (data) => {
  try {
    // console.log(data.getAll());
    const res = await net.post("/user/login", data);
    console.log(res.data);
    localStorage.setItem("token", res.data.access_token);
    localStorage.setItem("login", 1);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { handleLoginAPI, handleGetUserInfo, handleLogout };
