import { products } from "@/data/products";

export default function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;
      const filteredProducts = products.filter((product) => {
        const name = product.category.toLowerCase();
        return name.includes(id.toLowerCase());
      });
      res.status(200).json({ data: filteredProducts });
    }
  } catch (error) {
    res.status(404).json({ message: `Error: ${error.message}` });
  }
}
