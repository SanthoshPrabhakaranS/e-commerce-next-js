import React from "react";
import AboutImg from "../../../public/assets/about.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="h-full w-full max-w-[1200px] flex flex-col justify-center items-center gap-5 mx-auto font-montserrat p-2">
      <h1 className="mt-2 text-[1.2rem] font-semibold">About Us</h1>
      <Image
        className="w-full max-w-[600px] h-full"
        src={AboutImg}
        alt="about-img"
        height={"400"}
        width={"400"}
      />
      <div className="flex flex-col gap-2">
        <p className="">
          Welcome to Fressy, your ultimate destination for fashionable clothing
          online. At Fressy, we believe that style is a form of self-expression,
          and we are here to empower you to embrace your unique fashion sense.
          Our carefully curated collection showcases the latest trends, ensuring
          that you stay ahead of the fashion curve.
        </p>
        <p>
          We understand that shopping for clothes should be an enjoyable
          experience, which is why we have created a user-friendly platform that
          makes browsing and purchasing a breeze. Whether you're searching for
          casual essentials, elegant evening wear, or statement pieces to make
          heads turn, Fressy has you covered.
        </p>
        <p>
          Quality and comfort are at the core of our philosophy. We handpick
          each item, ensuring that it meets our high standards of craftsmanship
          and durability. With a wide range of sizes, styles, and colors, we
          strive to cater to diverse tastes and body types, making fashion
          accessible to everyone.
        </p>
        <p>
          Join our fashion-forward community and explore the world of Fressy.
          Discover your perfect ensemble, express your individuality, and feel
          confident in every step you take. Experience the joy of shopping with
          Fressy, where fashion meets passion.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
