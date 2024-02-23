"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { RiMenu3Line } from "react-icons/ri";
import { HiX } from "react-icons/hi";

const navLinks = [
  { title: "Benefits ", href: "#benefits" },
  { title: "List My Dapp", href: "dapp" },
  { title: "Work With Us", href: "#work-with-us" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-3 bg-black  ">
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
        <div className="md:flex hidden space-x-5 items-center">
          {navLinks.map(({ title, href }) => (
            <Link
              className="block transition-all duration-500"
              key={title}
              href={href}>
              {title}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-green-300 font-bold p-1 border border-transparent hover:border-green-200 rounded-lg "
          onClick={toggleMenu}>
          <div className="text-3xl">{!isOpen ? <RiMenu3Line /> : <HiX />}</div>
        </button>
      </header>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {navLinks.map(({ title, href }) => (
          <div className=" bg-black text-right px-4 py-2">
            <Link className="block" key={title} href={href}>
              {title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
