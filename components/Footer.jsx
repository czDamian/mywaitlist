import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-10">
      <div className="grid grid-cols-2 md:grid-cols-4"> 
        <div className="p-2 text-center">
          <h1 className="font-bold">PRODUCTS</h1>
          <a href="#" target="_blank">Iotex Daily</a>
          <a href="#" target="_blank">Premium</a>
          <a href="#" target="_blank">NFT</a>
          <a href="#" target="_blank">List my Dapp</a>
        </div>

        <div className="p-2 text-center">
          <h1 className="font-bold">INTEGRATIONS</h1>
          <a href="#" target="_blank">Depin Scan</a>
        </div>

        <div className="p-2 text-center">
          <h1 className="font-bold">CONTACT US</h1>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Email</a>
          <a href="#" target="_blank">Work With Us</a>
        </div>

        <div className="p-2 text-center">
          <h1 className="font-bold">SUPPORTED CHAINS</h1>
          <a href="#" target="_blank">Iotex</a>
          <a href="#" target="_blank">Cosmos</a>
          <a href="#" target="_blank">Osmosis (beta)</a>
        </div>
      </div>

        <div className="text-center mt-8">
          (c) 2023 DappEra
          <Link href="#">Terms and Conditions</Link>
        </div>
    </footer>
  );
};

export default Footer;
