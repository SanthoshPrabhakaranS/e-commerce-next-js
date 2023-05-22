import { CiMenuFries } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io";
import { FiUser, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { MdOutlineShoppingCart, MdOutlineDeleteOutline } from "react-icons/md";
import { BiCartDownload } from "react-icons/bi";

const size = "1.2rem";
export const Menu = <CiMenuFries size={size} />;
export const User = <FiUser size={size} />;
export const Cart = <MdOutlineShoppingCart size={size} />;
export const UpArrow = <FiChevronUp size={"1rem"} />;
export const DownArrow = <FiChevronDown size={"1rem"} />;
export const CartBuy = <BiCartDownload size={"1.3rem"} />;
export const Delete = <MdOutlineDeleteOutline size={"1.3rem"} />;

