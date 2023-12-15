"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-3  ">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={logo} alt="logo" height={35} width={35} />
        </div>
        <div className="px-2 text-2xl font-bold">
          Dapp<span className="text-green-700">Era</span>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="mx-2">
          <Link
            href="#waitlist"
            className="border bg-gray-900 border-neutral-100 rounded-md px-4 py-2 hover:no-underline hover:bg-green-900">
            Join Waitlist
          </Link>
        </div>
        <div className=" md:hidden ">
          <button
            className="relative text-2xl border border-transparent hover:bg-gray-900 hover:border-white py-1 px-2  rounded-md cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? <FaBars /> : <HiX />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 flex flex-col  items-end shadow-sm shadow-white w-full h-full  z-10 bg-slate-900">
            <Link target="_blank" href="#waitlist" className="py-2 px-4 w-full">
              Telegram
            </Link>
            <Link
              target="_blank"
              href="https://x.com/OnDappEra"
              className="py-2 px-4 w-full">
              Twitter
            </Link>
          </div>
        )}
        <div className="hidden md:block">
          <Link
            target="_blank"
            href="https://x.com/OnDappEra"
            className="no-underline py-2 px-4 w-full">
            Twitter
          </Link>
          <Link
            target="_blank"
            href="https://t.me/iotex_daily"
            className="no-underline  py-2 px-4 w-full">
            Telegram
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
