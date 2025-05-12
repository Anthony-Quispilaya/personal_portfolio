import Header from "@/components/header/Header";
import About from "@/components/About/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";
import Skills from "@/components/skills/Skills";
import ClientOnly from "@/components/ui/ClientOnly";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import FloatingNav from "@/components/ui/FloatingNav";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function Home() {
  return (
    <ClientOnly>
      <SmoothScroll>
        <div className="flex flex-col items-center min-h-screen navbar-bg-color text-white">
          <ScrollProgress />
          <ParticlesBackground />
          <FloatingNav />
          <div className="relative w-full">
            <Header />
          </div>
          <div className="mt-32">
            <About />
          </div>
          <main className="flex flex-col items-center w-full gap-32 px-4 mt-32">
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </SmoothScroll>
    </ClientOnly>
  );
}
