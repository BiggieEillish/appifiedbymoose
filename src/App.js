import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Progress from './components/Progress';
import Video from './components/Video';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Advantage from './components/Advantage';
import Download from './components/Download';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="header-background w-full h-screen flex flex-col">
        <Hero/>
        <About/>
        <Progress/>
        <Video/>
        <Feature/>
        <Testimonial/>
        <Gallery/>
        <Advantage/>
        <Download/>
        <Pricing/>
        <Faq/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
