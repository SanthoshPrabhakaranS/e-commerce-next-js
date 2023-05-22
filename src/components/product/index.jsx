import React from "react";

const Product = ({ item }) => {
  return (
    <div className="w-full max-w-[250px] h-full max-h-[250px]">
      <img
        className="w-full h-full p-2 rounded-lg"
        src={item.image}
        alt="product"
      />
      <p className="font-semibold text-center">{item.title}</p>
    </div>
  );
};

export default Product;
