import { Img } from "@/interface/DataInterface";
import style from "./pagi.module.scss";
import { Card, Pagination } from "antd";
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";

interface Prop {
  items: [];
  page?: number;
  goToPage: (n: number) => void;
  pageSize: number;
}

export default function PaginationComponent(prop: Prop) {
  const { items, page, goToPage, pageSize } = prop;
  const pageNum = page ? page : 1;

  const renderItem = (start: number, size: number) => {
    const tmp = items.slice((start - 1) * size, start * size);
    const res: JSX.Element[] = [];
    console.log(tmp);
    tmp.forEach((e: Img) => {
      res.push(
        <Card title={e.name} className={style.item}>
          <Card.Meta
            avatar={<img src={e.img} alt="..." width={100} height={100} />}
            description={e.dsc}
          />
        </Card>
      );
    });
    return res;
  };
  const [pageCur, setPageCur] = useState<JSX.Element[]>();

  const onChangePage = (current: number) => {
    goToPage(current);
  };
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
