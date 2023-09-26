import styles from "./home.module.scss";
import { data } from "../../data";
import { Carousel } from "antd";
import { handleGetAllProductCategory } from "../../api/productCategoryApi";
import { useEffect, useState } from "react";

export default function HomeComponent() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getAllCategory = async () => {
      const res = await handleGetAllProductCategory();
      return res.success ? res.data : null;
    };
    getAllCategory()
      .then((res) => setCategory(res))
      .catch(() => {
        setCategory(null);
      });
  }, []);
  console.log(category);
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
              height={500}
              width={244}
              key={123}
              onClick={(e) => {
                console.log(e);
              }}
            />
          );
        })}
      </Carousel>
    </>
  );
}
