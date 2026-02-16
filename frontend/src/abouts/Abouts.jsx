import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/about";

function Abouts() {
  return (
    <>
      <div class="flex h-screen items-center justify-center">
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Abouts;
