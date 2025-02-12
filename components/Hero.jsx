import mainsite from "../asset/mainSite.png";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-center place-items-center gap-20 my-20">
      <div className="text-center  shrink-0 bg-inherit backdrop-blur-lg p-2 rounded-lg">
        <div className="font-bold text-4xl md:text-4xl">
          Experience the future <br /> of web3
        </div>
        <div className="mt-2 text-sm opacity-80">
          get exclusive access to groundbreaking features
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mt-6">
          <Link
            className="hover:no-underline border border-green-700 hover:bg-opacity-60  bg-green-950 rounded-full px-4 py-2"
            href="#waitlist">
            Join Waitlist
          </Link>

          <Link
            className="hover:no-underline border bg-[#0c0c18] border-white hover:border-green-700 hover:text-green-700  rounded-full px-4 py-2"
            href="/dapp">
            List My Dapp
          </Link>
        </div>
      </div>
      <Image
        src={mainsite}
        alt="dappera"
        className="rounded-xl w-full md:max-w-[600px] border "
      />
    </main>
  );
};

export default Hero;
