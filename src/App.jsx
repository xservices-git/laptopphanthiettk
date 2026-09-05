import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { TrustBar } from './components/TrustBar/TrustBar';
import { Services } from './components/Services/Services';
import { Products } from './components/Products/Products';
import { Articles } from './components/Articles/Articles';
import { About } from './components/About/About';
import { Gallery } from './components/Gallery/Gallery';
import { Process } from './components/Process/Process';
import { Reviews } from './components/Reviews/Reviews';
import { Location } from './components/Location/Location';
import { ContactCTA } from './components/ContactCTA/ContactCTA';
import { Footer } from './components/Footer/Footer';
import { MobileCTA } from './components/MobileCTA/MobileCTA';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Products />
      <Articles />
      <About />
      <Gallery />
      <Process />
      <Reviews />
      <Location />
      <ContactCTA />
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
