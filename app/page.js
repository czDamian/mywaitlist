import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" ">
      <Header />
      <div className="mx-8">
        <Hero />
        <WaitlistForm />
        <Benefits />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
