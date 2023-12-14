import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-10 px-4">
      <div className="text-center ">
        Copyright 2023 DappEra <div>All rights reserved.</div>
      </div>
      <div className=" ">
        <div className="flex items-center">
          <Link href="#">
            <FaFacebook className="text-3xl px-1" />
          </Link>
          <Link href="#">
            <FaWhatsapp className="text-3xl px-1" />
          </Link>
          <Link href="#">
            <FaTelegram className="text-3xl px-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
