"use client";
import { FaGamepad } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaGifts } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  });
  const items = [
    {
      id: 1,
      name: "NFT SALES",
      desc: "Unlock insights into the historical data of NFT sales",
      img: <FaCartPlus />,
      class: "bg-blue-400 rounded",
      alt: "NFT sales",
    },
    {
      id: 2,
      name: "DEPIN",
      desc: "Our unique and vibrant Dapp simplifies the comprhension of DePin data",
      img: <FaGifts />,
      class: "bg-blue-400 rounded",
      alt: "depin",
    },
    {
      id: 3,
      name: "GAME FI",
      desc: "Explore the Web3 GameFi sector for unparalleled opportunities",
      img: <FaGamepad />,
      class: "bg-blue-400 rounded",
      alt: "gamefi",
    },
    {
      id: 4,
      name: "RED ALARM",
      desc: "Safeguard yourself against fraudulent tokens",
      img: <FaClock />,
      class: "bg-red-400 rounded",
      alt: "redalarm",
    },
    {
      id: 5,
      name: "DEFI TVL",
      desc: "Stay informed with real-time updates on decentralized finance",
      img: <FaFlag />,
      class: "bg-red-400 rounded",
      alt: "redalarm",
    },
    {
      id: 6,
      name: "BLOCKCHAINS",
      desc: "Seamless news coverage and latest information about the IoTex Ecosystem and other blockchains",
      img: <FaBtc />,
      class: "bg-red-400 rounded",
      alt: "redalarm",
    },
  ];
  return (
    <section className="my-20 xl:my-4 md:mx-8 xl:mx-16">
      <div className=" mb-4 bg-gradient-to-r from-transparent from-10% via-sky-950 via-40% to-transparent to-90% py-3">
        <h1 className="text-3xl text-center font-bold">
          What Awaits You
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-2">
        {items.map((item) => (
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="120"
            data-aos-easing="ease"
            key={item.id}
            data-aos-duration="600">
            <div className="bg-gray-800 p-6 xl:p-8 rounded-md lg:rounded-xl">
              <div className="font-extrabold  text-xl"> {item.name} </div>
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
