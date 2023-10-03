import { ResponseDataCategory } from "@/interface/DataInterface";
import net from "./apiConfig";

const handleGetAllProductCategory: ()=>Promise<ResponseDataCategory>|null = async () => {
  try {
    const res = await net.get("category");
    return res.data;
  } catch (err) {
    return { success: false, err: err };
  }
};

const handleGetCategoryDetail:(id:number)=>Promise<ResponseDataCategory>|null = async (id) => {
  try {
    const res = await net.get("category",{
      params:{
        id:id
      }
    });
    return res.data;
  } catch (err) {
    return { success: false, err: err };
  } 
}

export { 
  handleGetAllProductCategory,
  handleGetCategoryDetail 
};
