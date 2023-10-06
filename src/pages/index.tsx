import Ai from "@/components/Landing/Ai/Ai";
import Formation from "@/components/Landing/Formations/Formation";
import Hero from "@/components/Landing/Hero/Hero";
import NewsLetter from "@/components/Landing/NewsLetter/NewsLetter";
import Partners from "@/components/Landing/Partners/Partners";
import Services from "@/components/Landing/Services/Services";

export default function Home() {
  return <main className={`font-poppins `}>
   <Hero/> 
   <Partners/>
   <Services/>
   <Ai/>
   <Formation/>
   <NewsLetter/>
  </main>;
}
