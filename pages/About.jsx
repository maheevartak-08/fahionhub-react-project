import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>About FashionHub</h1>
        <p>
          FashionHub is a modern fashion store offering stylish clothes for
          men, women, and kids. We focus on quality, comfort, and latest trends.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;