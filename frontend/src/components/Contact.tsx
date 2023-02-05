import "./assets/css/Contact.css";
import { SiHashnode } from "react-icons/si";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact_section">
      <h1 className="con_head">Get In Touch.</h1>
      <div className="contact_content">
        <div className="left_contact">
          <p className="contact_desc">
            I’m currently looking for new fulltime opportunities, my socials are
            always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>
          <p className="contact_desc">
            You can also use the Contact Form to message me. ✌
          </p>
          <div className="socials cont_socials">
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
        </div>
        <div className="right_contact">
          {/* <h2>Contact</h2> */}
          <form>
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Email" />
            <textarea placeholder="Enter Your Message"></textarea>
            <button className="btn_resume btn_submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
