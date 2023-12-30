import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import Benefits from "@/components/Benefits";
export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-4">
        <Hero />
        <Benefits />
        <WaitlistForm />
      </div>
      <Footer />
    </>
  );
}
