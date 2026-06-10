import {Navbar} from "../components/Navbar";
import {Hero} from "../components/Hero";
import {Categories} from "../components/Categories";
import {ProductCard} from "../components/Productcard";
import {Testimonials} from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ProductCard />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;