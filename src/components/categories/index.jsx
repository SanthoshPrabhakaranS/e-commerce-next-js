import React from "react";
import Image from "next/image";
import MensClothing from "../../../public/assets/men-clothing.jpg";
import WomensClothing from "../../../public/assets/women-clothing.jpg";
import KidsClothing from "../../../public/assets/kids.jpg";
import Accessories from "../../../public/assets/accessories.jpg";
import Hats from "../../../public/assets/hats.jpg";
import Suits from "../../../public/assets/suits.jpg";
import Link from "next/link";

const images = [
  { category: MensClothing, name: "men's clothing" },
  { category: WomensClothing, name: "women's clothing" },
  { category: Suits, name: "suits" },
  { category: KidsClothing, name: "kid's clothing" },
  { category: Hats, name: "hats" },
  { category: Accessories, name: "accessories" },
];

const Category = () => {
  return (
    <div className="py-2 px-2 md:px-10 font-montserrat w-full flex flex-col gap-3">
      <h1 className="font-semibold text-[1.5rem] text-center">Category</h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((item, index) => {
          return (
            <div key={index} className="relative cursor-pointer group">
              <Link href={`/products/${item.name}`}>
                <div className="w-full h-full group-hover:bg-primary opacity-20 absolute top-0 transition-all flex justify-center items-center text-[1.5rem] lg:text-[2rem] text-black font-bold">
                  {item.name}
                </div>
                <Image
                  src={item.category}
                  className="h-full min-h-[400px] max-h-[400px] w-full max-w-[600px]"
                  alt="image"
                  height={"300"}
                  width={"300"}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
