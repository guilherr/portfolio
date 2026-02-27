import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
