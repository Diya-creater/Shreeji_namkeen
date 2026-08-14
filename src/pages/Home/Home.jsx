import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import OurStory from "../../components/OurStory/OurStory";
import Products from "../../components/Products/Products";
import Gallery from "../../components/Gallery/Gallery";
import ShopVideo from "../../components/ShopVideo/ShopVideo";
import Reviews from "../../components/Reviews/Reviews";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

import "./Home.css";

function Home() {
  return (
    <div className="website">

      <Navbar />

      <main>

        <Hero />

        <About />

        <OurStory />

        <Products />

        <Gallery />

        <ShopVideo />

        <Reviews />

        <Contact />

      </main>

      <Footer />

      <BackToTop />
      

    </div>
  );
}

export default Home;