import React,{useEffect} from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import ReactGA from 'react-ga';
import { AccessibilityWidget } from 'react-accessibility';




const TRACKING_ID = "G-9946VW8P5L"; // Replace with your Google Analytics tracking ID


const App = () => {


  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);



  return(
  <div>
    <Header />
    <AccessibilityWidget   />

    <MainSection />
    <Footer />
  </div>

  );
};

export default App;
