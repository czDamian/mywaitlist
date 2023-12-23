import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full h-screen">
      <Header />
      <section>
        <div className="text-lg text-center my-20">
          <div className="text-9xl">404</div>
          Page Not Found
        </div>
      </section>
      <Footer />
    </main>
  );
}
