import styles from "./category.module.scss";
import styles2 from "../../App.module.scss";
import PaginationComponent from "../../component/pagination";
import { data } from "../../data";
import { useParams, useSearchParams } from "react-router-dom";

export default function CategoryComponent() {
  const { id } = useParams();
  const pageSize = 9;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGoToPage = (page) => {
    if (page !== 1) setSearchParams({ page: page });
    else {
      setSearchParams({});
    }
  };
  return (
    <div className={styles2.content__container}>
      <h1>category {id}</h1>
      <div className={styles.card__container}>
        <PaginationComponent
          items={data}
          pageNum={searchParams.get("page")}
          goToPage={handleGoToPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
