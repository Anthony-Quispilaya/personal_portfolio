import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen navbar-bg-color text-white">
      <Nav />
      <Header />
      <main className="flex flex-col items-center w-full gap-12 px-4">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
