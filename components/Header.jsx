import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items- p-2">
      <div className="flex justify-between items-center">
        <div className="">
          <Image src={logo} height={32} width={32} />
        </div>
        <div className="">DappEra</div>
      </div>
      <div className=" ">
        <div className="flex">
          <Link href="#">Twittter</Link>
          <Link href="#">Email</Link>
          <Link href="#waitlist">Join the Waitlist</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
