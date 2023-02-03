import "./assets/css/Hero.css";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero_section">
      <p className="hero_top">Hi, I am</p>
      <h1 className="hero_header">Sayan Munshi.</h1>
      <h2 className="hero_tag">
        A Passionate FullStack Developer with a knack to learn new Technologies.
      </h2>
      <p className="hero_desc">
        I am a design minded <span>FullStack Developer </span>
        based on Kolkata, India. I like building solid and scalable frontend
        products with great user experience. I like to write clean and elegant
        code.
      </p>
      <p className="hero_desc">
        Connect with me if you are interested to collaborate with me. ✌
      </p>
      <div className="socials">
        <FiGithub className="social_icons" />
        <FiTwitter className="social_icons" />
        <FiLinkedin className="social_icons" />
        <FiInstagram className="social_icons" />
        <FiMail className="social_icons" />
      </div>
    </section>
  );
};

export default Hero;
