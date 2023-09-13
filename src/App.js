import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import TrustedEmployee from './components/TrustedEmployee';
import How_it_Works from './components/How_it_Works';
import MakePitch from './components/MakePitch';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <TrustedEmployee />
      <How_it_Works />
      <MakePitch />
    </>
  );
}

export default App;
