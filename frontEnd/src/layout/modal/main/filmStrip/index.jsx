import styles from "./filmStrip.module.scss";

import { Button, Card, Popover } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import clsx from "clsx";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export default function FilmStripContainer({ items, width, height, id }) {
  const container = useRef(null);
  const navigate = useNavigate();
  const scrollLeft = () => {
    container.current.scrollBy({ top: 0, left: -width, behavior: "smooth" });
  };
  const scrollRight = () => {
    container.current.scrollBy({ top: 0, left: width, behavior: "smooth" });
  };
  const renderItem = () => {
    const res = [];
    for (let i = 0; i < items.length; i++) {
      const content = (
        <div>
          <p>Name: {items[i].name}</p>
          <p>Price: {items[i].price}</p>
        </div>
      );
      res.push(
        <Popover content={content} title="Title">
          <Card hoverable className={styles.card__container}>
            <Meta
              title={items[i].name}
              description={items[i].name}
              avatar={
                <img
                  alt="..."
                  src={items[i].picture}
                  width={100}
                  height={100}
                />
              }
            />
          </Card>
        </Popover>
      );
    }
    return <>{res}</>;
  };

  const handleShowMore = () => {
    navigate(`/category/${id}`);
  };

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
