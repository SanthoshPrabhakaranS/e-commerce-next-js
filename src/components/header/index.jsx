import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="w-full bg-primary px-5">
      <ul className="py-2 flex flex-row gap-6 w-full justify-end items-center text-white font-montserrat text-[.9rem]">
        <li className="cursor-pointer text-[.8rem] md:text-[1rem]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer text-[.8rem] md:text-[1rem]">
          <Link href={"/about-us"}>About us</Link>
        </li>
      </ul>
    </section>
  );
};

export default Header;
