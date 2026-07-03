import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';
import Stack from './Stack';
import StatusBar from './StatusBar';
import WindowBar from './WindowBar';

export default function Terminal() {
  return (
    <section className="term-section">
      <div id="top" className="term-frame">
        <WindowBar />
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
        <StatusBar />
      </div>
    </section>
  );
}
