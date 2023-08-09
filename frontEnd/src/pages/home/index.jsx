import { Carousel, Card, Image } from "antd";
import styles from "./home.module.scss";
import { data } from "../../data";
import FilmStripContainer from "../../layout/modal/main/filmStrip";

export default function HomeComponent() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div className={styles.container__banner}>
        <Carousel
          afterChange={onChange}
          autoplay
          dotPosition={"bottom"}
          width={300}
        >
          {data.map((p) => {
            return <Image alt="example" src={p.img} height={300} width={244} />;
          })}
        </Carousel>
      </div>
      <div className={styles.container}>
        <FilmStripContainer items={data} width={900} category={"category 1"} />
      </div>
      <div className={styles.container}>
        <FilmStripContainer items={data} width={900} category={"category 2"} />
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
