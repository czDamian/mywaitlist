"use client";
import { FaGamepad } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaGifts } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
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
      desc: "Get access to historic  data of NFT sales",
      img: <FaCartPlus />,
      class: "bg-blue-400 rounded",
      alt: "NFT sales",
    },
    {
      id: 2,
      name: "DEPIN",
      desc: "Get access to DEPIN and enjoy seamless transactions",
      img: <FaGifts />,
      class: "bg-blue-400 rounded",
      alt: "depin",
    },
    {
      id: 3,
      name: "GAME FI",
      desc: "Get access to the web3 GameFi sector ",
      img: <FaGamepad />,
      class: "bg-blue-400 rounded",
      alt: "gamefi",
    },
    {
      id: 4,
      name: "RED ALARM",
      desc: "Protect yourself from scam tokens",
      img: <FaClock />,
      class: "bg-red-400 rounded",
      alt: "redalarm",
    },
  ];
  return (
    <section className="my-20 xl:my-40 mx-3 md:mx-8 xl:mx-16 p-4 ">
      <div>
        <h1 className="text-3xl text-center font-bold mb-4">
          Why Should I join?
        </h1>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  ">
        {items.map((item) => (
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="120"
            data-aos-easing="ease"
            key={item.id}
            data-aos-duration="600">
            <div className="bg-gray-800 p-4 xl:p-8 rounded-md lg:rounded-xl">
              <div className="font-extrabold  text-xl"> {item.name} </div>
              <div className="flex justify-between items-center py-2">
                <div className="opacity-70"> {item.desc}</div>
                <div className="flex-shrink-0 text-4xl">{item.img}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
