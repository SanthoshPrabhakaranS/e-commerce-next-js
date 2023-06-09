import Image from "next/image";
import React from "react";

const Product = ({ item }) => {
  return (
    <div className="w-full max-w-[250px] h-full max-h-[250px]">
      <Image
        className="w-full h-full p-2 rounded-lg"
        src={item.image}
        alt="product"
        height={"300"}
        width={"300"}
      />
      <p className="font-semibold text-center">{item.title}</p>
    </div>
  );
};

export default Product;
