import Link from "next/link";
import React from "react";

const BuyNow = () => {
  return (
    <div className="w-full h-full mt-10 flex flex-col gap-2 justify-center items-center ">
      <p className="text-[1.2rem] font-semibold">
        This is page is under development!
      </p>
      <Link href={"/"}>
        <p className="underline text-[1.1rem] font-semibold cursor-pointer">
          Back to home
        </p>
      </Link>
    </div>
  );
};

export default BuyNow;
