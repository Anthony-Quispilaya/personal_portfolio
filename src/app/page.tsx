import Nav from "@/components/Nav";
import Header from "@/components/header/Header";
import About from "@/components/About/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";
import Skills from "@/components/skills/Skills";
import ClientOnly from "@/components/ui/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <div className="flex flex-col items-center min-h-screen navbar-bg-color text-white">
        <Nav />
        <div className="relative w-full">
          <Header />
          <About />
        </div>
        <main className="flex flex-col items-center w-full gap-32 px-4 mt-32">
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ClientOnly>
  );
}
