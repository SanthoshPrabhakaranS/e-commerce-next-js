import { AppContext } from "@/context/context";
import React, { useContext } from "react";
import CartImg from "../../../public/assets/cart.png";
import Image from "next/image";
import { Delete } from "../../icons/icons";

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  const _subTotal = () => {
    if (cart.length > 0) {
      const total = cart.reduce((accumulator, item) => {
        return accumulator + parseInt(item.price);
      }, 0);
      return total;
    } else {
      return 0;
    }
  };

  const _deleteItem = (value) => {
    const newArr = cart.filter((item) => item.name !== value);
    setCart(newArr);
  };

  return (
    <div className="w-full flex justify-center max-w-[800px] mx-auto font-montserrat">
      <div className="flex flex-col gap-2 mt-5">
        <h1 className="text-center font-playFair text-[1.2rem] font-semibold">
          {cart.length !== 0 ? "Cart" : null}
        </h1>
        <div className="">
          {cart.length !== 0 ? (
            <div className="flex flex-col gap-3">
              {cart.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-2 "
                  >
                    <div>
                      <Image
                        src={item.img}
                        alt="product-img"
                        height={"100"}
                        width={"100"}
                        className="w-full max-w-[100px] h-full max-h-[90px]"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-[.8rem]">Rs: {item.price}</p>
                      {/* <p className="text-[.8rem]">Rs: {item.price}</p> */}
                    </div>
                    <div
                      onClick={() => _deleteItem(item.name)}
                      className="cursor-pointer"
                    >
                      {Delete}
                    </div>
                  </div>
                );
              })}
              <div className="flex flex-row justify-between items-center text-[.9rem] border-t pt-4">
                <div className="flex flex-col gap-1">
                  <span>Sub Total</span>
                  <span>Shipping cost</span>
                  <span>Total</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span>{_subTotal()} /-</span>
                  <span>Free</span>
                  <span>{_subTotal()} /-</span>
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={CartImg}
              alt="cart-img"
              height={"300"}
              width={"300"}
              className="w-full max-w-[400px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
