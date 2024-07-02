import Navbar from './Component/Navbar';
import './App.css';
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import Welcome from './Component/Welcome';
import KeyService from './Component/KeyService';
import HeroSection from './Component/HeroSection';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
import About from './Pages/About';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';
import EarningDisclaimer from './Pages/EarningDisclaimer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Welcome />
            <KeyService />
            <HeroSection />
          </>
        } />
        <Route path="/contact" exact element={<ContactUs />} />
        <Route path="/services" element={<KeyService/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-conditions" element={<TermsConditions/>} />
        <Route path="/earning-disclaimer" element={<EarningDisclaimer/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
