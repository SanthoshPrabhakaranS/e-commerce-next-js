import ApiServices from "@/utils/services";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Categories = ({ data }) => {
  const router = useRouter();
  const { categoryId } = router.query;
  return (
    <div className="p-5 font-montserrat">
      <h1 className="text-center font-semibold text-[1.1rem] md:text-[2rem]">
        Fashionable{" "}
        <span className="text-primary font-semibold">{categoryId}</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {data?.map((item) => {
            return (
              <div
                key={item.id}
                className="mx-auto border border-grey flex flex-col gap-2 cursor-pointer rounded-md"
              >
                <Link href={`/products/${item.category}/${item.id}`}>
                  <Image
                    src={item.image}
                    alt="product-img"
                    height={"300"}
                    width={"300"}
                    className="h-full max-h-[350px] rounded-t-md"
                  />
                  <div className="p-1">
                    <h1 className="text-[1rem] font-semibold">{item.name}</h1>
                    <p className="text-[.9rem]">Rs: {item.price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </h1>
    </div>
  );
};

export default Categories;

export async function getStaticPaths() {
  const _ApiService = new ApiServices();
  const response = await _ApiService.getAllProducts();
  const data = await response;
  const paths = data.data.map((item) => {
    return {
      params: {
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
  const id = params.categoryId;
  const _ApiService = new ApiServices();
  const response = await _ApiService.getCategory(id);
  const data = await response;
  return {
    props: {
      data: data.data,
    },
  };
}
