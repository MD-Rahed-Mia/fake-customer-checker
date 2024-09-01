import React from "react";
import Nav from "../component/Nav";
import Banner from "../component/Banner";
import Services from "../component/Services";
import Support from "../component/Support";
import OurProduct from "../component/OurProduct";
import ProjectCounter from "../component/ProjectCounter";
import WorkingProcess from "../component/WorkingProcess";
import PricingContainer from "../component/PricingContainer";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <div className="bg-slate-200">
        <Services />
        <Support />
      </div>
      <OurProduct />

      <ProjectCounter />
      <WorkingProcess />
      <PricingContainer />
      <Contact />
      <Footer />
    </div>
  );
}
