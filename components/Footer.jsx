import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-between gap-x-4 items-center py-10 px-4">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={logo} alt="logo" height={35} width={35} />
        </div>
        <div className="px-2 text-2xl font-bold">
          Dapp<span className="text-green-700">Era</span>
        </div>
      </div>
      <div className="text-center ">
        Copyright 2023 DappEra <div>All rights reserved.</div>
      </div>
      <div className=" ">
        <div className="flex items-center gap-2 text-3xl">
          <Link target="_blank" href="https://x.com/OnDappEra">
            <FaXTwitter className="text-3xl px-1" />
          </Link>
          <Link target="_blank" href="https://t.me/iotex_daily">
            <FaTelegramPlane className="text-3xl px-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
