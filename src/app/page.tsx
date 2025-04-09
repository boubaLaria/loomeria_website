import AppPromo from "./Component/AppPromo";
import Hero from "./Component/Hero";
import Pricing from "./Component/Pricing";
import Values from "./Component/Values";
import WhyChoose from "./Component/WhyChoose";
import WhySell from "./Component/WhySell";

export default function Home() {
  return (
    <div className="bg-white max-w-7xl mx-auto flex flex-col min-h-screen">
      
      <div id="hero">
        <Hero />
      </div>
      <div id="values">
        <Values />
      </div>
      <div id="why-choose">
        <WhyChoose />
      </div>
      <div id="why-sell">
        <WhySell />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="app-promo">
        <AppPromo />
      </div>
    </div>
  );
}
