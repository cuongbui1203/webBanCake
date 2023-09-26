import net from "./axios";

const handleGetProductInCategory = async (id, offset, limit) => {
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
