import { Navigate } from "react-router-dom";

export default function CheckAuth() {
  return (
    <>
      <Navigate to="/home" replace={true} />
    </>
  );
}
