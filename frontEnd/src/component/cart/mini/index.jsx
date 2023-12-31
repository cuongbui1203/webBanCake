import styles from "./miniCart.module.scss";
import { Card } from "antd";

export default function MiniCartComponent({ items }) {
  const i = {
    name: "s1",
    amount: 10,
    img: "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g",
  };

  const renderItem = () => {
    let res = [];
    for (let i = 0; i < items.length; i++) {
      res.push(
        <Card hoverable className={styles.card__container}>
          <Card.Meta
            title={items[i].name}
            description={renderDsc(items[i].amount)}
            avatar={<img alt="..." src={items[i].img} width={50} height={50} />}
          />
        </Card>
      );
    }
  };

  const renderDsc = (amount) => {
    return <div className={styles.dsc}>SL: {amount}</div>;
  };
  return (
    <div>
      <Card hoverable className={styles.card__container}>
        <Card.Meta
          title={i.name}
          description={renderDsc(i.amount)}
          avatar={<img alt="..." src={i.img} width={50} height={50} />}
        />
      </Card>
      <Card hoverable className={styles.card__container}>
        <Card.Meta
          title={i.name}
          description={renderDsc(i.amount)}
          avatar={<img alt="..." src={i.img} width={50} height={50} />}
        />
      </Card>
      <Card hoverable className={styles.card__container}>
        <Card.Meta
          title={i.name}
          description={renderDsc(i.amount)}
          avatar={<img alt="..." src={i.img} width={50} height={50} />}
        />
      </Card>
    </div>
  );
}
