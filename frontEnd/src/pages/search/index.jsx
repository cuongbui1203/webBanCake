import { useSearchParams } from "react-router-dom";

export default function SearchComponent() {
  const [search, setSearchParams] = useSearchParams();
  //   console.log(search.get())
  return <div>search result: {search.get("search")}</div>;
}
