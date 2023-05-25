import { AppContext } from "@/context/context";
import { Menu, Cart, User } from "@/icons/icons";
import Link from "next/link";
import React, { useContext } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

const Navbar = () => {
  const { cart } = useContext(AppContext);

  const _filterPopOver = () => {
    return (
      <Popover placement="bottom">
        <PopoverHandler>
          <Button
            id="popover"
            className="!bg-gray-100 !text-black !shadow-none p-0"
          >
            {Menu}
          </Button>
        </PopoverHandler>
        <PopoverContent>
          <ul className="flex flex-col gap-2 p-2">
            <li className="cursor-pointer border-b">
              <Link href={"/products/men's clothing"}>Men&apos;s clothing</Link>
            </li>
            <li className="cursor-pointer border-b">
              <Link href={"/products/women's clothing"}>Women&apos;s clothing</Link>
            </li>
            <li className="cursor-pointer border-b">
              <Link href={"/products/suits"}>Suits</Link>
            </li>
            <li className="cursor-pointer border-b">
              <Link href={"/products/kid's clothing"}>Kid&apos;s clothing</Link>
            </li>
            <li className="cursor-pointer border-b">
              <Link href={"/products/hats"}>Hats</Link>
            </li>
            <li className="cursor-pointer border-b">
              <Link href={"/products/accessories"}>Accessories</Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <section className="w-full px-5 flex flex-row justify-between items-center py-2 bg-secondary border-b">
      <div className="flex flex-row items-center gap-2 font-medium text-lg font-playFair">
        {_filterPopOver()}
        <h1>Fressy</h1>
      </div>
      <div className="flex flex-row items-center gap-3 ">
        <div className="cursor-pointer relative">
          <Link href={"/cart"}>
            {Cart}{" "}
            <span className="absolute top-[-30%] right-[-25%] text-[.8rem] font-semibold text-red">
              {cart != 0 ? cart.length : "0"}
            </span>
          </Link>
        </div>
        <div className="cursor-pointer">{User}</div>
      </div>
    </section>
  );
};

export default Navbar;
