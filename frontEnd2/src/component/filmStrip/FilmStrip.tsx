import styles from "./filmStrip.module.scss";
import { Product } from "@/interface/DataInterface";

import clsx from "clsx";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Popover } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

interface Props {
  readonly items: Array<Product>;
  readonly width: number;
  readonly height?: number;
  readonly id: number;
}

export default function FilmStripContainer(props: Props) {
  const { items, width, id } = props;
  const [res, setRes] = useState<JSX.Element[]>();
  const container = useRef<HTMLDivElement>(null);
  console.log(items);
  const tem = `[{"id":11,"name":"cupcake no.1","price":30000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":50,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":12,"name":"cupcake no.2","price":32000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":55,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":13,"name":"cupcake no.3","price":34000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":60,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":14,"name":"cupcake no.4","price":36000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":65,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":15,"name":"cupcake no.5","price":38000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":70,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":16,"name":"cupcake no.6","price":40000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":75,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":17,"name":"cupcake no.7","price":42000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":80,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":18,"name":"cupcake no.8","price":44000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":85,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":19,"name":"cupcake no.9","price":46000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":90,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"},{"id":20,"name":"cupcake no.10","price":48000,"detail":"The cake is a delectable confectionary item that is typically made from a combination of flour, sugar, eggs, and butter. It is often baked in an oven and can come in a variety of shapes, sizes, and flavors.","picture":"https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180755374657.jpg","quantity":95,"categoryId":1,"created_at":"2023-10-01T03:46:52.000000Z","updated_at":"2023-10-01T03:46:52.000000Z"}]`;
  const pa = JSON.parse(tem);
  const navigate = useNavigate();
  const scrollLeft = () => {
    container?.current?.scrollBy({ top: 0, left: -width, behavior: "smooth" });
  };
  const scrollRight = () => {
    container?.current?.scrollBy({ top: 0, left: width, behavior: "smooth" });
  };
  const renderItem = () => {
    const res = [];
    console.log(pa);
    for (let i = 0; i < pa.length; i++) {
      const content = (
        <div>
          <p>Name: {pa[i].name}</p>
          <p>Price: {pa[i].price}</p>
        </div>
      );
      res.push(
        <Popover content={content} title="Title">
          <Card hoverable className={styles.card__container}>
            <Card.Meta
              title={pa[i].name}
              description={pa[i].detail}
              avatar={
                <img alt="..." src={pa[i].picture} width={100} height={100} />
              }
            />
          </Card>
        </Popover>
      );
      // setRes(res);
      console.log(res);
    }
    return <>{res}</>;
  };

  const handleShowMore = () => {
    navigate(`/category/${id}`);
  };
  console.log(res);
  return (
    <div className={styles.film_strip_container} style={{ width: width }}>
      <div>
        <label>category {id}</label>
        <Button onClick={handleShowMore}>xem them</Button>
      </div>
      <div ref={container} className={styles.container}>
        <button
          className={clsx(styles.card__btn, styles.card__btn_left)}
          onClick={scrollLeft}
        >
          <CaretLeftFilled className={styles.card__btn_icon} />
        </button>
        <button
          className={clsx(styles.card__btn, styles.card__btn_right)}
          onClick={scrollRight}
        >
          <CaretRightFilled className={styles.card__btn_icon} />
        </button>
        {renderItem()}
      </div>
    </div>
  );
}
