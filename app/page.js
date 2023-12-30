import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import Benefits from "@/components/Benefits";
export default function Home() {
  return (
      <div className="mx-4">
        <Hero />
        <Benefits />
        <WaitlistForm />
      </div>
  );
}
