"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { RiMenu3Line } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-950  to-slate-900  ">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={logo} alt="logo" height={35} width={35} />
        </div>
        <div className="px-2 text-2xl font-bold">
          <Link href="/" className="hover:no-underline">
            DappEra
          </Link>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="mx-2 hidden md:block">
          <Link href="#" className="py-2 px-4 w-full">
            List my Dapp
          </Link>

          <Link href="#" className="py-2 px-4 w-full">
            Premium
          </Link>
          <Link
            href="#waitlist"
            className="border bg-gray-900 border-neutral-100 rounded-md px-4 py-2 hover:no-underline hover:bg-green-900">
            Join Waitlist
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="relative text-2xl border border-transparent hover:bg-gray-900 hover:border-white py-1 px-2  rounded-md cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? <RiMenu3Line /> : <HiX />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 flex flex-col  items-end shadow-sm shadow-white w-full h-full  z-10 bg-slate-900">
            <Link href="/" className="py-2 px-4 w-full">
              Home
            </Link>
            <Link href="#" className="py-2 px-4 w-full">
              List my Dapp
            </Link>
            <Link href="#" className="py-2 px-4 w-full">
              Work With Us
            </Link>
            <Link href="#" className="py-2 px-4 w-full">
              Premium
            </Link>
          </div>
        )}
        
      </div>
    </header>
  );
};

export default Header;
