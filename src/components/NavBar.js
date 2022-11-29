import React from "react";
import { AiOutlineHome, AiOutlineHeart, AiOutlineLogin } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Logo from "../assets/image/logo.png";

const NavBar = () => {
  return (
    <ul className="flex justify-center items-center">
      <li className="mr-8">
        <a
          className="text-blue-500 hover:text-blue-800 flex justify-center items-center"
          href="#"
        >
          <img src={Logo} className="w-24" />
        </a>
      </li>
      <li className="mr-8">
        <a
          className="text-blue-500 hover:text-blue-800 flex justify-center items-center"
          href="#"
        >
          <div className="mr-2">Home</div>
          <AiOutlineHome />
        </a>
      </li>
      <li className="mr-8">
        <a
          className="text-blue-500 hover:text-blue-800 flex justify-center items-center"
          href="#"
        >
          <div className="mr-2">Create Pool</div>
          <FaMoneyBillWave />
        </a>
      </li>
      <li className="mr-8">
        <a
          className="text-blue-500 hover:text-blue-800 flex justify-center items-center"
          href="#"
        >
          <div className="mr-2">Favorites</div>
          <AiOutlineHeart />
        </a>
      </li>
      <li className="mr-8">
        <a
          className="text-blue-500 hover:text-blue-800 flex justify-center items-center"
          href="#"
        >
          <div className="mr-2">Account</div>
          <MdAccountCircle />
        </a>
      </li>
      <li className=" mr-8">
        <a
          className="text-blue-500 hover:text-blue-800 flex justify-center items-center"
          href="#"
        >
          <div className="mr-2">Login</div>
          <AiOutlineLogin />
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
