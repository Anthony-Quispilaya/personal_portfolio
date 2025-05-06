import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex flex-col items-center w-full gap-12 px-4">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
