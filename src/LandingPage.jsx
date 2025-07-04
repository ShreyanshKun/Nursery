// src/LandingPage.jsx
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <div className="left-hero">
          <h1>Welcome To <br /> BotaniCasa</h1>
          <p className="tagline">“Grow where you're planted — thrive where you're loved.”</p>
          <button onClick={() => navigate("/products")}>Get Started</button>
        </div>
        <div className="right-about">
          <h2>About Us</h2>
          <p>
            Welcome to BotaniCasa — where nature meets nurture.
            We are a modern, plant-forward nursery dedicated to bringing the calming power of greenery into every home. From low-maintenance indoor plants to exotic botanicals, our curated collection is handpicked to help you build your personal oasis, one leaf at a time.
          </p>
          <p>
            At BotaniCasa, we believe that plants are more than decor — they’re living companions that purify our air, calm our minds, and connect us to the rhythms of nature. Whether you’re a seasoned plant parent or just beginning your journey, we’re here to guide you with love, knowledge, and green inspiration.

            Let your home grow with us 🌱
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
