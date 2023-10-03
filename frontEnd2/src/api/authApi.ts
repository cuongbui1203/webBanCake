import { 
  ResponseDataUser, 
  ResponseInfo, 
  ResponseLogin 
} from "@/interface/DataInterface";
import net from "./apiConfig";

const handleLogout: () => Promise<ResponseInfo>|null = async () => {
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

const handleGetUserInfo:()=>Promise<ResponseDataUser>|null = async () => {
  try {
    const res = await net.get("/user/me");
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const handleLoginAPI:(data:unknown)=>Promise<ResponseLogin>|null = async (data) => {
  try {
    const res = await net.post("/user/login", data);
    console.log(res.data);
    localStorage.setItem("token", res.data.access_token);
    localStorage.setItem("login", '1');
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { 
  handleLoginAPI, 
  handleGetUserInfo,
  handleLogout 
};
