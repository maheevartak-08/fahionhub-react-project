import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <h1>Contact Us</h1>

      <input type="text" placeholder="Your Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <button>Submit</button>

      <Footer />
    </>
  );
}

export default Contact;