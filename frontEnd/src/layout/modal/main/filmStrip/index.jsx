import styles from "./filmStrip.module.scss";

import { Card, Popover } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import clsx from "clsx";
import { useRef } from "react";

const { Meta } = Card;

export default function FilmStripContainer({ items, width, height, category }) {
  const container = useRef(null);

  const scrollLeft = () => {
    container.current.scrollBy({ top: 0, left: -width, behavior: "smooth" });
  };
  const scrollRight = () => {
    container.current.scrollBy({ top: 0, left: width, behavior: "smooth" });
  };
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  const renderItem = () => {
    const res = [];
    for (let i = 0; i < items.length; i++) {
      res.push(
        <Popover content={content} title="Title">
          <Card hoverable className={styles.card__container}>
            <Meta
              title={items[i].name}
              description={items[i].dsc}
              avatar={
                <img alt="..." src={items[i].img} width={100} height={100} />
              }
            />
          </Card>
        </Popover>
      );
    }
    return <>{res}</>;
  };

  return (
    <div className={styles.film_strip_container} style={{ width: width }}>
      <label>{category}</label>
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
