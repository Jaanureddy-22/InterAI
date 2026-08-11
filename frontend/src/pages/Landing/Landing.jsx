import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />

      <section
        id="features"
        style={{
          minHeight: "400px",
          background: "#080b16",
        }}
      />

      <section
        id="how-it-works"
        style={{
          minHeight: "400px",
          background: "#080b16",
        }}
      />

      <section
        id="about"
        style={{
          minHeight: "200px",
          background: "#080b16",
        }}
      />
    </>
  );
}

export default Landing;