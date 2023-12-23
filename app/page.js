import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-8">
        <Hero />
        <WaitlistForm />
        <Benefits />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
