import styles from "./home.module.scss";
import styles2 from "../../App.module.scss";
import { data } from "../../data";
import FilmStripContainer from "../../layout/modal/main/filmStrip";
import { Carousel } from "antd";
import { useState } from "react";

export default function HomeComponent() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  // const [width, setWidth] = useState(width);
  return (
    <>
      <Carousel
        afterChange={onChange}
        autoplay
        dotPosition={"bottom"}
        width={300}
        className={styles.container__banner}
      >
        {data.map((p) => {
          return (
            <img
              className={styles.card__image}
              alt="example"
              src="https://ledmofan.com/wp-content/uploads/2023/03/hinh-nen-dep-cho-may-tinh-ledmofan-full-hd-2-1.jpg"
              height={300}
              width={244}
              key={123}
              onClick={(e) => {
                console.log(e);
              }}
            />
          );
        })}
      </Carousel>
      <div className={styles.container}>
        <FilmStripContainer items={data} width={1300} category={"category 1"} />
      </div>
      <div className={styles.container}>
        <FilmStripContainer items={data} width={1300} category={"category 2"} />
      </div>
      <div className={styles.container}>
        <FilmStripContainer items={data} width={900} category={"category 3"} />
      </div>
      <div className={styles.container}>
        <FilmStripContainer items={data} width={900} category={"category 4"} />
      </div>
    </>
  );
}
