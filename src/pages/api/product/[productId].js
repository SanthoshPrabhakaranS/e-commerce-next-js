import { products } from "@/data/products";

export default function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { productId } = req.query;
      const singleProduct = products.find((item) => item.id == productId);
      res.status(200).json({ data: singleProduct });
    }
  } catch (error) {
    res.status(404).json({ message: `Error: ${error.message}` });
  }
}
