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
} from "react-icons/si";

const About = () => {
  return (
    <section className="about_section">
      <h1 className="abt_head">About Me.</h1>
      <div className="abt_content">
        <div className="abt_write">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            provident unde? Suscipit sed saepe, autem exercitationem excepturi
            quas accusamus perspiciatis quos officiis labore dolor aliquam animi
            fugiat ipsa quisquam laborum sapiente unde, necessitatibus aliquid
            ex. Nesciunt odit aperiam nobis? Amet aspernatur ex repudiandae
            facere omnis odit natus esse harum. Illum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde id
            corporis, qui excepturi totam animi ea nemo dolores dignissimos ex.
            Soluta quasi sint asperiores iusto labore cum sequi dolores
            exercitationem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime
            eos aperiam quibusdam, consequuntur eveniet id harum illum corrupti
            aut eligendi blanditiis porro! Repudiandae maiores, unde similique
            cupiditate cum error!
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
            </ul>
          </div>
        </div>
        <div className="profile_img"></div>
      </div>
    </section>
  );
};

export default About;
