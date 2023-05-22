import { products } from "@/data/products";

export default function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.status(200).json({ data: products });
    }
  } catch (error) {
    res.status(404).json({ message: `Error: ${error.message}` });
  }
}
