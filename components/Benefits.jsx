"use client";
import { FaGamepad, FaCartPlus, FaGifts, FaClock, FaBtc, FaFlag } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  });
  const items = [
    {
      id: 1,
      name: "NFTs",
      desc: "Unlock insights into the historical data of NFT sales",
      img: <FaCartPlus />,
    },
    {
      id: 2,
      name: "DEPIN",
      desc: "Our unique and vibrant Dapp simplifies the comprhension of DePin data",
      img: <FaGifts />,
    },
    {
      id: 3,
      name: "GAME FI",
      desc: "Explore the Web3 GameFi sector for unparalleled opportunities",
      img: <FaGamepad />,
    },
    {
      id: 4,
      name: "RED ALARM",
      desc: "Safeguard yourself against fraudulent tokens",
      img: <FaClock />,
    },
    {
      id: 5,
      name: "DEFI TVL",
      desc: "Stay informed with real-time updates on decentralized finance",
      img: <FaFlag />,
    },
    {
      id: 6,
      name: "BLOCKCHAIN DATA",
      desc: "Seamless news coverage and latest information about the IoTex Ecosystem and other blockchains",
      img: <FaBtc />,
    },
  ];
  return (
    <section className="my-20 md:mx-8 xl:mx-12 pb-8">
      <div className="backdrop-blur-lg mb-8 bg-gradient-to-r from-transparent from-10% via-sky-950 via-40% to-transparent to-90% py-3">
        <h1 className="text-3xl text-center font-bold">Why DappEra?</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-1">
        {items.map((item) => (
          <div
            key={item.id}
            data-aos="fade-zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-duration="600">
            <div className=" bg-gradient-to-br from-slate-900 to-slate-950 p-6 xl:p-8 rounded-xl border border-transparent hover:border-white">
              <div className="font-extrabold text-xl"> {item.name} </div>
              <div className="flex justify-between items-center py-3">
                <div className="opacity-70"> {item.desc}</div>
                <div className="flex-shrink-0 text-4xl mx-2">{item.img}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
