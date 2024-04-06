import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import 'animate.css';

export default function Home() {
  return (

  <div className="main">
    
    <div className="bg-white  justify-between pl-10 pt-3 border-b-2 w-90% flex">
      <h1 className=" text-black pr-7 hover:text-red-700 cursor-pointer " > Default welcome msg!</h1>
      <div className="flex">
      <h1 className="pr-9 hover:text-red-700 cursor-pointer">MY ACCOUNT |</h1>
      <h1 className="pr-9 hover:text-red-700 cursor-pointer">DOLLAR(US) |</h1>
      <img src=""></img>
      <h1 className="pr-9 hover:text-red-700 cursor-pointer">ENGLISH |</h1></div>
    </div>
  <div className=" justify-between flex bg-white h-28">
    
  <h1 className="pt-7 text-3xl ml-8 hover:text-red-700 cursor-pointer  ">PHULER</h1>
  <div className=" justify-between flex pl-96 pt-8 text-xl">
      <h1 className="pr-7 hover:text-red-700 cursor-pointer">HOME</h1>
      <h1 className="pr-7 hover:text-red-700 cursor-pointer">ABOUT</h1>
      <h1 className="pr-7 hover:text-red-700 cursor-pointer">SHOP</h1>
      <h1 className="pr-7 hover:text-red-700 cursor-pointer">BLOG</h1>
      <h1 className="pr-7 hover:text-red-700 cursor-pointer ">PAGES</h1>
      <FaShoppingBag className=" text-xl" />
  </div>
  </div>
  <div className="mt-72 ml-8 ">
    <h1 className="text-red-500 pt-3 text-4xl animate__animated animate__backInLeft">New arrivals</h1>
    <h1 className="text-4xl pt-3 animate__animated animate__backInLeft">For MOTHER's Days</h1>  
    <h1 className="pt-3 animate__animated animate__backInLeft">Exlusive Offer -10% Off This Week</h1>
    <button className="mt-3 px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 animate__animated animate__backInLeft">Shop now</button>
  </div>
  
  </div>
)
}
