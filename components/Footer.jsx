import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 mt-20 bg-slate-950">
      <div className="grid grid-cols-2 sm:grid-cols-4"> 
        <div className="p-2 text-center">
          <h1 className="font-bold">PRODUCTS</h1>
          <a href="https://x.com/iotex_daily" target="_blank">Iotex Daily</a>
          <a href="#premium" target="_blank">Premium</a>
          <a href="https://opensea.io" target="_blank">NFT</a>
          <a href="/dapp" >List my Dapp</a>
        </div>
        <div className="p-2 text-center">
          <h1 className="font-bold">SUPPORTED CHAINS</h1>
          <a href="https://iotex.io" target="_blank">Iotex</a>
          <a href="https://cosmos.network" target="_blank">Cosmos</a>
          <a href="https://osmosis.zone" target="_blank">Osmosis (beta)</a>
        </div>

        <div className="p-2 text-center">
          <h1 className="font-bold">INTEGRATIONS</h1>
          <a href="https://depinscan.io/" target="_blank">Depin Scan</a>
        </div>

        <div className="p-2 text-center">
          <h1 className="font-bold">CONTACT US</h1>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Email</a>
          <a href="#" target="_blank">Work With Us</a>
        </div>

      </div>

        <div className="text-center text-sm mt-8 mb-2">
          <Link href="#">Terms and Conditions</Link>
        </div>
    </footer>
  );
};

export default Footer;
