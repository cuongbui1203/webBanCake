import {
  Product,
  ResponseDataCategory,
  ResponseDataProduct,
} from "@/interface/DataInterface";
import { handleGetProductInCategory } from "@/api/productApi";
import { handleGetCategoryDetail } from "@/api/productCategoryApi";
import PaginationComponent from "@/component/pagination/Pagination";
import styles from "./category.module.scss";
import styles2 from "@/assets/style/style.module.scss";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function CategoryComponent() {
  const { id } = useParams();
  const pageSize = 9;
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<Product[]>();
  const [name, setName] = useState("");
  const handleGoToPage = (page: number) => {
    if (page !== 1) setSearchParams({ page: JSON.stringify(page) });
    else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    const handel = async () => {
      if (!id) return;
      try {
        const res: ResponseDataProduct | null =
          await handleGetProductInCategory(id, 0, 20);
        const res2: ResponseDataCategory | null = await handleGetCategoryDetail(
          parseInt(id)
        );

        setData(res?.data);
        if (res2) setName(res2.data[0].name);
      } catch (e) {
        return;
      }
    };
    handel();
  }, [id, name]);

  return (
    <div className={styles2.content__container}>
      <h1>category {name}</h1>
      <div className={styles.card__container}>
        <PaginationComponent
          items={data}
          page={searchParams.get("page")}
          goToPage={handleGoToPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}