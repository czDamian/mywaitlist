import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "DappEra Waitlist",
  description: "the future of web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased flex flex-col justify-between `}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
