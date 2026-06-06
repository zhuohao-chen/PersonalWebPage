import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import ResearchInterests from "@/components/ResearchInterests";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(43,108,176,0.16),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_34%,#ffffff_100%)]" />
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <ResearchInterests />
        <News />
        <Publications />
        <Projects />
        <Skills />
        <Awards />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
