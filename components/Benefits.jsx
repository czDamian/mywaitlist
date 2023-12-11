import Image from "next/image";
import tool from "../asset/tool.svg";
import game from "../asset/game.svg";
import market from "../asset/market.svg";
import redalarm from "../asset/redalarm.svg";
const Benefits = () => {
  const items = [
    { id: 1, name: "NFT Sales", desc: "Get access to historic  data of NFT sales", img: tool, class:'bg-blue-400 rounded', alt: "NFT sales" },
    { id: 2, name: "DEPIN", desc: "Get access to DEPIN and enjoy seamless transactions", img: market, class:'bg-blue-400 rounded', alt: "depin" },
    { id: 3, name: "GAME FI", desc: "Get access to the web3 GameFi sector ", img: game, class:'bg-blue-400 rounded', alt: "gamefi" },
    { id: 4, name: "RED ALARM", desc: "Protect yourself from scam tokens", img: redalarm, class:'bg-red-400 rounded', alt: "redalarm" },
  ];
  return (
    <section className="my-20 xl:my-40 mx-4 md:mx-12 xl:mx-20 p-4 bg-slate-700 rounded-lg">
      <div>
        <h1 className="text-3xl text-center font-bold mb-4">Why Should I join?</h1>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  ">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 p-4 xl:p-8 rounded-md lg:rounded-xl">
            <div className="font-bold text-black text-xl"> {item.name} </div>
            <div className="flex justify-between items-center py-2">
              <div className=""> {item.desc}</div>

              <div className="flex-shrink-0">
                <Image className={item.class} src={item.img} width={50} height={50} alt={item.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
