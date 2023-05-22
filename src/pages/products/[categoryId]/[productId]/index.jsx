import ApiServices from "@/utils/services";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { UpArrow, DownArrow, Cart, CartBuy } from "@/icons/icons";
import { AppContext } from "@/context/context";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const ProductDetails = ({ data }) => {
  const { cart, setCart } = useContext(AppContext);

  const _addToCart = (name, price, img) => {
    const newItem = {
      name,
      price,
      img,
    };
    setCart([...cart, newItem]);
    toast("Item added to the cart!");
  };

  return (
    <main className="font-montserrat">
      <Toaster />
      <div className="p-3 md:p-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
        <div>
          <Image
            src={data?.image}
            alt="product-img"
            height={"300"}
            width={"300"}
            className="w-full max-w-[400px] h-full max-h-[550px] mx-auto"
          />
        </div>
        <div className="p-0 md:p-2 flex flex-col gap-8 w-full">
          <h1 className="text-[1.3rem] font-semibold">{data?.name}</h1>
          <div className="flex flex-row justify-between gap-2 text-[.85rem]">
            <p className="text-primary">Price: Rs. {data?.price}</p>
            <p>Availability: {data?.availabiity}</p>
          </div>
          <div>
            <div className="flex flex-row items-center gap-1">
              {data?.size !== "Free size" ? (
                data?.size.map((item, idx) => {
                  return (
                    <span
                      key={idx}
                      className="border p-1 cursor-pointer hover:bg-grey text-[.8rem]"
                    >
                      {item}
                    </span>
                  );
                })
              ) : (
                <p className="text-[.85rem]">{data?.size}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <div className="flex flex-row items-center justify-between gap-2 border p-1 px-4 max-w-[100px]">
              <span>0</span>
              <span className="cursor-pointer">
                {UpArrow} {DownArrow}
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <button
                onClick={() => _addToCart(data?.name, data?.price, data?.image)}
                className="flex flow-row items-center gap-2 bg-grey text-[.8rem] md:text-[1rem] text-primary p-2 whitespace-nowrap"
              >
                Add to cart {Cart}
              </button>
                <Link href={"/buy-now"}>
              <button className="flex flow-row items-center gap-2 bg-primary text-[.8rem] md:text-[1rem] text-grey p-2 md:px-4 whitespace-nowrap">
                Buy now {CartBuy}
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const _ApiService = new ApiServices();
  const response = await _ApiService.getAllProducts();
  const data = await response;
  const paths = data.data.map((item) => {
    return {
      params: {
        productId: item.id.toString(),
        categoryId: item.category.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.productId;
  console.log("Hello");
  const _ApiService = new ApiServices();
  const response = await _ApiService.getProduct(id);
  const data = await response;
  return {
    props: {
      data: data.data,
    },
  };
}
