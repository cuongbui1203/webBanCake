import { Link, useParams } from "react-router-dom";

export default function UserComponent() {
  const { name } = useParams();
  return (
    <>
      <p>user {name}</p>
      <Link to="/home">home</Link>
    </>
  );
}
