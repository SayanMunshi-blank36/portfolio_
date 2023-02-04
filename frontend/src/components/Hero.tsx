import "./assets/css/Hero.css";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";
import { SiHashnode } from "react-icons/si";

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
        based on Kolkata, India. Currently, I'm working as an intern at{" "}
        <a href="https://mindwebs.org" target="_blank" rel="noreferrer">
          <span className="underline_ani">MindWebsVentures</span>
        </a>
        . Connect with me if you are interested to collaborate. ✌
      </p>
      <div className="socials">
        <a
          href="https://github.com/SayanMunshi-blank36"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="social_icons" />
        </a>
        <a href="https://twitter.com/blank_36" target="_blank" rel="noreferrer">
          <FiTwitter className="social_icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/sayan-munshi-714a401b8/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="social_icons" />
        </a>
        <a
          href="https://www.instagram.com/blank_36_r/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram className="social_icons" />
        </a>
        <a
          href="https://sayanmunshi-blank36.hashnode.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <SiHashnode className="social_icons" />
        </a>
        <a
          href="mailto:sayanmunshi36@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail className="social_icons" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
