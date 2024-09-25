import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Service from './components/Service';
import AboutSection from './components/DoctorSection';
import AppSection from './components/AppSection';
import Testimonial from './components/Testimonial';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <AboutSection />
      <AppSection />
      <Testimonial />
      <Article />
      <Footer />
    </>
  );
}

export default App;
