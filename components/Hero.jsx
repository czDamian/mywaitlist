import mainsite from "../asset/mainSite.png";
import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="text-center my-20 leading-8 md:leading-10 text-2xl md:text-4xl">
        <div>Be the first to experience the future of web3 with DappEra!</div>
        <div className="italic mt-2 text-sm">
          join our waitlist for <span className="text-green-400">exclusive access</span> to groundbreaking features and insights
        </div>
      </div>
      <div className="  my-8 grid place-items-center">
        <Image
          src={mainsite}
          alt="dappera"
          className="rounded-lg w-full md:max-w-[600px] "
        />
      </div>
    </main>
  );
};

export default Hero;
