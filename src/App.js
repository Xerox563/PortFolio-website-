import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Card from "./components/Card";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <About />
      <Card />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
