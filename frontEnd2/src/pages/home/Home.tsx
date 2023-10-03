import styles from "./home.module.scss";
import { Carousel } from "antd";
import { handleGetAllProductCategory } from "../../api/productCategoryApi";
import { useEffect, useState } from "react";
import { Category } from "@/interface/DataInterface";

export default function HomeComponent() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const [category, setCategory] = useState<Category[]>();

  useEffect(() => {
    handleGetAllProductCategory()
      ?.then((res) => setCategory(res.data))
      .catch(() => setCategory([]));
  }, []);
  console.log(category);
  return (
    <>
      <Carousel
        afterChange={onChange}
        autoplay
        dotPosition={"bottom"}
        // width={300}
        className={styles.container__banner}
      >
        {category?.map(() => {
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
