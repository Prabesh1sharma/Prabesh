import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";
import BuyMeMomo from "@/components/sections/BuyMeMomo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Blogs />
        <Contact />
        <BuyMeMomo />
      </main>
      <Footer />
    </>
  );
}
