import net from "./axios";

const handleGetAllProductCategory = async () => {
  try {
    const res = await net.get("category");
    return res.data;
  } catch (err) {
    return { success: false, err: err };
  }
};

export { handleGetAllProductCategory };
