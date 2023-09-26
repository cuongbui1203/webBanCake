import style from "./pagi.module.scss";
import { Card, Pagination } from "antd";
import { useEffect, useState } from "react";
export default function PaginationComponent({
  items,
  pageNum,
  goToPage,
  pageSize,
}) {
  pageNum = pageNum ? pageNum : 1;

  const renderItem = (start, size) => {
    const tmp = items.slice((start - 1) * size, start * size);
    const res = [];
    console.log(tmp);
    tmp.forEach((e) => {
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
  const [pageCur, setPageCur] = useState(<></>);

  const onChangePage = (current, pageSize) => {
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
