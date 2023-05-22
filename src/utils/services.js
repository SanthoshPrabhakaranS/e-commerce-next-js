import axios from "axios";

export default class ApiServices {

  async getAllProducts() {
    const response = await axios.get(`http://localhost:3000/api/all-products`)
    return response.data
  }

  async getCategory(id) {
    const response = await axios.get(`http://localhost:3000/api/products/${id}`)
    return response.data
  }

  async getProduct(productId) {
    const response = await axios.get(`http://localhost:3000/api/product/${productId}`)
    return response.data
  }
}
