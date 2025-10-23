import Hero from '../components/Hero';
import Packages from '../components/Packages';
import About from '../components/About';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Packages />
      <About />
      <Certificates />
      <Contact />
    </>
  );
}
