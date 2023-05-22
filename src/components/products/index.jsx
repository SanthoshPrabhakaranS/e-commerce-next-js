import ApiServices from "@/utils/services";
import axios from "axios";
import React, { useEffect } from "react";
import Product from "../product";

const Products = ({ data }) => {
  return (
    <div className="font-montserrat w-full h-full px-4">
      <h1 className="font-semibold text-[1.8rem] text-center mb-5">Products</h1>
      <div className="h-full grid grid-cols-5 gap-[5rem]">
        {data?.map((item, index) => {
          return <Product key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
