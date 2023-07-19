import Image from 'next/image';
import { ClientOnly } from 'next/dynamic';
import JavaScriptImage from '../../public/images/skills/JavaScript.svg';
import HTMLImage from '../../public/images/skills/HTML.svg';
import CSSImage from '../../public/images/skills/CSS.svg';
import RubyImage from '../../public/images/skills/Ruby.png';
import RailsImage from '../../public/images/skills/Rails.png';
import PhaserImage from '../../public/images/skills/Phaser.svg';
import ReactImage from '../../public/images/skills/React.png';
import TDDImage from '../../public/images/skills/TDD.png';
import PairProgrammingImage from '../../public/images/skills/PairProgramming.png';
import "animate.css";

function About() {
  const toggleContent = (section) => {
    switch (section) {
      case "languages":
        const arrowRightLanguages = document.querySelector("#arrow-right-languages");
        const arrowDownLanguages = document.querySelector("#arrow-down-languages");
        const languagesContent = document.querySelector("#languages-content");
        if (arrowRightLanguages.classList.contains('hide')) {
          arrowRightLanguages.classList.remove("hide");
          arrowDownLanguages.classList.add("hide");
          languagesContent.classList.add("hide");
        } else {
          arrowRightLanguages.classList.add("hide");
          arrowDownLanguages.classList.remove("hide");
          languagesContent.classList.remove("hide");
        }
        break;
      case 'frameworks':
        const arrowRightFrameworks = document.querySelector("#arrow-right-frameworks");
        const arrowDownFrameworks = document.querySelector("#arrow-down-frameworks");
        const frameworkContent = document.querySelector("#frameworks-content");
        if (arrowRightFrameworks.classList.contains('hide')) {
          arrowRightFrameworks.classList.remove("hide");
          arrowDownFrameworks.classList.add("hide");
          frameworkContent.classList.add("hide");
        } else {
          arrowRightFrameworks.classList.add("hide");
          arrowDownFrameworks.classList.remove("hide");
          frameworkContent.classList.remove("hide");
        }
        break;
      case 'skills':
        const arrowRightSkills = document.querySelector("#arrow-right-skills");
        const arrowDownSkills = document.querySelector("#arrow-down-skills");
        const skillsContent = document.querySelector("#skills-content");
        if (arrowRightSkills.classList.contains('hide')) {
          arrowRightSkills.classList.remove("hide");
          arrowDownSkills.classList.add("hide");
          skillsContent.classList.add("hide");
        } else {
          arrowRightSkills.classList.add("hide");
          arrowDownSkills.classList.remove("hide");
          skillsContent.classList.remove("hide");
        }
        break;
      default:
        // console.log("Error")
    }
  };

  return (
    <div className="About" id="about">
      <div className="myself">
        <div>
          <div className="title">About me</div>
          <p className="text">
            I'm a full-stack software developer. I can provide you with the software infrastructure to make your ideas become a reality.
            As a full-stack software developer, I focus both on the aesthetics of your system, as well as its correct functioning.
          </p>
          {/* <div className="call-to-action">Let's connect! </div>
            <a
              onClick={this.props.clickHandler} 
              onMouseDown={this.props.clickHandler}
              href="https://linktr.ee/ivanderlich">
              <img className="linktree" src={linktreeLink} alt="linktree link" />
            </a> */}
        </div>
      </div>
      <div className="skills">
        <div className="capabilities-supra">
          <div className="capabilities">
            <ClientOnly>
              <div onClick={() => toggleContent("languages")} className="capabilities">
                <div>Languages</div>
                <i id="arrow-right-languages" className="fas fa-chevron-right animate__animated animate__fadeIn"></i>
                <i id="arrow-down-languages" className="fas fa-chevron-down hide animate__animated animate__fadeIn"></i>
              </div>
            </ClientOnly>
            <div id="languages-content" className="languages-content hide">
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={JavaScriptImage} alt="JavaScript" className="skills-image" />
                <div>JavaScript</div>
              </div>
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={HTMLImage} alt="HTML" className="skills-image" />
                <div>HTML</div>
              </div>
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={CSSImage} alt="CSS" className="skills-image" />
                <div>CSS</div>
              </div>
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={RubyImage} alt="Ruby" className="skills-image" />
                <div>Ruby</div>
              </div>
            </div>
          </div>
        </div>
        <div className="capabilities-supra">
          <div className="capabilities">
            <ClientOnly>
              <div onClick={() => toggleContent("frameworks")} className="capabilities">
                <div>Frameworks</div>
                <i id="arrow-right-frameworks" className="fas fa-chevron-right animate__animated animate__fadeIn"></i>
                <i id="arrow-down-frameworks" className="fas fa-chevron-down hide animate__animated animate__fadeIn"></i>
              </div>
            </ClientOnly>
            <div id="frameworks-content" className="frameworks-content hide">
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={RailsImage} alt="Rails" className="skills-image" />
                <div>Rails</div>
              </div>
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={ReactImage} alt="React" className="skills-image" />
                <div>React</div>
              </div>
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={PhaserImage} alt="Phaser" className="skills-image" />
                <div>Phaser</div>
              </div>
            </div>
          </div>
        </div>
        <div className="capabilities-supra">
          <div className="capabilities">
            <ClientOnly>
              <div onClick={() => toggleContent("skills")} className="capabilities">
                <div>Skills</div>
                <i id="arrow-right-skills" className="fas fa-chevron-right animate__animated animate__fadeIn"></i>
                <i id="arrow-down-skills" className="fas fa-chevron-down hide animate__animated animate__fadeIn"></i>
              </div>
            </ClientOnly>
            <div id="skills-content" className="skills-content hide">
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={TDDImage} alt="TDD" className="skills-image" />
                <div>Test Driven Development</div>
              </div>
              <div className="skills-item animate__animated animate__zoomIn">
                <Image src={PairProgrammingImage} alt="Pair Programming" className="skills-image" />
                <div>Pair Programming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;