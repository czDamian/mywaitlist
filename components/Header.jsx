import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import twitter from "../asset/twitter250.svg";
import telegram from "../asset/telegram.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 ">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={logo} alt="logo" height={35} width={35} />
        </div>
        <div className="px-2 text-2xl">
          Dapp<span className="text-green-400">Era</span>{" "}
        </div>
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
          <Link
            href="#waitlist"
            className="border border-green-400 rounded-md px-2 py-1 hover:no-underline hover:text-white hover:border-white hidden md:block ">
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
