import { Product } from "@/interface/DataInterface";
import style from "./pagi.module.scss";
import { Card, Pagination } from "antd";
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";

interface Prop {
  items: Product[] | undefined;
  page?: string | null;
  goToPage: (n: number) => void;
  pageSize: number;
}

export default function PaginationComponent(prop: Prop) {
  const { items, page, goToPage, pageSize } = prop;
  const pageNum = page ? parseInt(page) : 1;
  if (!items) return;
  console.log(items);
  const renderItem = (start: number, size: number) => {
    const tmp = items.slice((start - 1) * size, start * size);

    const res: JSX.Element[] = [];
    console.log(tmp);
    items.forEach((e: Product) => {
      res.push(
        <Card title={e.name} className={style.item}>
          <Card.Meta
            avatar={<img src={e.picture} alt="..." width={100} height={100} />}
            description={e.detail}
          />
        </Card>
      );
    });
    return res;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pageCur, setPageCur] = useState<JSX.Element[]>();

  const onChangePage = (current: number) => {
    goToPage(current);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setPageCur(renderItem(pageNum, pageSize));
    console.log(":::", pageNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);
  return (
    <div>
      <div className={style.item__container}>{pageCur}</div>
      <Pagination
        total={items.length}
        defaultPageSize={pageSize}
        defaultCurrent={pageNum}
        onChange={onChangePage}
      />
    </div>
  );
}
