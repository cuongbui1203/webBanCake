import { ResponseDataProduct } from "@/interface/DataInterface";
import net from "./apiConfig";

const handleGetProductInCategory:(id:string, offset?:number, limit?:number)=>Promise<ResponseDataProduct>|null = async (id, offset, limit) => {
  try {
    const res = await net.get(`/product/category/${id}`, {
      params: {
        offset: offset,
        limit: limit,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { handleGetProductInCategory };
