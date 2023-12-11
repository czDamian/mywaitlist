import Image from "next/image";
import Link from "next/link";
import twitter from "../asset/twitter250.svg";
import telegram from "../asset/telegram.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-10 px-4">
      <div className="text-center opacity-80">
        Copyright 2023 DappEra <div>All rights reserved.</div>
      </div>
      <div className=" ">
        <div className="flex items-center">
          <Link href="#">
            <Image
              src={twitter}
              className="bg-green-400 rounded-md hover:bg-white"
              alt="twitter-x"
              height={32}
              width={32}
            />
          </Link>
          <Link href="#">
            <Image
              src={telegram}
              className="bg-green-400 rounded-md hover:bg-white"
              alt="telegram"
              height={32}
              width={32}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
