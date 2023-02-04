import "./assets/css/About.css";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiJest,
  SiWeb3Dotjs,
  SiSolidity,
  SiFigma,
  SiHashnode,
} from "react-icons/si";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const About = () => {
  return (
    <section className="about_section">
      <h1 className="abt_head">About Me.</h1>
      <div className="abt_content">
        <div className="abt_write">
          <p>
            Hello! My name is Sayan Munshi and I like making things for the web.
            Currently I am pursuing my B.Tech degree on Information Technology
            from the Institute of Enginnering and Management, Kolkata. My
            interest in Web Development started back in 2021. At the very
            beginning I got my hands on <span>HTML/CSS and JAVASCRIPT </span>
            and from there my journey began.
          </p>
          <p>
            Fast forwarding to present day I have learnt a handful of frontend
            technologies such as{" "}
            <span>ReactJS, NextJS, TailwindCSS, Redux, Redux Toolkit, </span>
            etc. along with a few backend technologies such as{" "}
            <span> NodeJS, ExpressJS </span> and <span> MongoDB</span>.
          </p>
          <p className="abt_social">
            Currently I am working as a FullStack Developer Intern at
            MindWebsVentures. If you want to collaborate with me for a project,
            do reach out to me through my socials:{" "}
            <div className="abt_socials">
              <span>
                <a
                  href="https://github.com/SayanMunshi-blank36"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="social_icons" />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/blank_36"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiTwitter className="social_icons" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/sayan-munshi-714a401b8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin className="social_icons" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/blank_36_r/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiInstagram className="social_icons" />
                </a>
              </span>
              <span>
                <a
                  href="https://sayanmunshi-blank36.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiHashnode className="social_icons" />
                </a>
              </span>
              <span>
                <a
                  href="mailto:sayanmunshi36@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail className="social_icons" />
                </a>
              </span>
            </div>
          </p>
          <p>Here are a few technologies I’ve been exploring recently:</p>
          <div className="tech_sec">
            <ul className="tech_stacks">
              <li>
                <SiCplusplus className="tech_icons" /> C++
              </li>
              <li>
                <SiJavascript className="tech_icons" /> JavaScript (ES 6+)
              </li>
              <li>
                <SiTypescript className="tech_icons" /> TypeScript
              </li>
            </ul>
            <ul className="tech_stacks">
              <li>
                <SiReact className="tech_icons" /> ReactJS
              </li>
              <li>
                <SiNodedotjs className="tech_icons" />
                NodeJS
              </li>
              <li>
                <SiMongodb className="tech_icons" />
                MongoDB
              </li>
            </ul>
            <ul className="tech_stacks">
              <li>
                <SiJest className="tech_icons" />
                Jest
              </li>
              <li>
                <SiDocker className="tech_icons" /> Docker
              </li>
              <li>
                <SiKubernetes className="tech_icons" />
                Kubernetes
              </li>
            </ul>
            <ul className="tech_stacks">
              <li>
                <SiSolidity className="tech_icons" /> Solidity
              </li>
              <li>
                <SiWeb3Dotjs className="tech_icons" />
                Web 3.0
              </li>
              <li>
                <SiFigma className="tech_icons" />
                Figma
              </li>
            </ul>
          </div>
        </div>
        <div className="profile_img"></div>
      </div>
    </section>
  );
};

export default About;
