import Footer from "@/components/Layouts/Footer/Footer";
import Navbar from "@/components/Layouts/Navbar/Navbar";
import Ai from "@/components/Landing/Ai/Ai";
import Formation from "@/components/Landing/Formations/Formation";
import Hero from "@/components/Landing/Hero/Hero";
import NewsLetter from "@/components/Landing/NewsLetter/NewsLetter";
import Partners from "@/components/Landing/Partners/Partners";
import Services from "@/components/Landing/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`container mx-auto font-poppins overflow-hidden space-y-12`}
      >
        <Hero />
        <Partners />
        <Services />
        <Ai />
        <Formation />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
