
import { useContext, useRef } from 'react';
import './App.css';

import { AppContext } from './context/AppContext';
import { NavbarOne } from './components/Navbar';
import HeroSection from './components/Herosection';
import ChangeCodeSection from './components/ChangeCodeSection';
import { FooterFour } from './components/Footer';
import { FeatureThree } from './components/Feature';
import { TestimonialOne } from './components/Testimonial';



function App() {

  const scrlToCode = useRef(null)

  function onChangeCodeScroll(){
    if (scrlToCode.current) {
      scrlToCode.current.scrollIntoView({
        behavior: 'smooth'
      });
    }

    
  }
  return (
    <div className="App h-screen  bg-slate-900 overflow-x-hidden">
      <div className='top-2 z-50'><NavbarOne/></div>
      
      <div className='relative flex h-[calc(100%-18%)] justify-evenly items-center gap-3 w-screen flex-wrap mx-auto'>
        <HeroSection onChangeCodeScroll={onChangeCodeScroll}/>
        
      </div>
      <div ref={scrlToCode}>
        <ChangeCodeSection/>
      </div>

      <div>
        <FeatureThree/>
      </div>

      <>
         <TestimonialOne/>
      </>
      <FooterFour/>
      
      
    </div>
  );
}

export default App;
