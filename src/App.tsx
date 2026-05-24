import About from './components/About';
import BlogNotes from './components/BlogNotes';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProofPoints from './components/ProofPoints';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-base-950 text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-signal-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        본문으로 이동
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <ProofPoints />
        <Certifications />
        <Skills />
        <Projects />
        <BlogNotes />
      </main>
      <Footer />
    </div>
  );
}
