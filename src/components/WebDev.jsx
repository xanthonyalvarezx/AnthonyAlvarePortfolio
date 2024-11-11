import devCert from "../assets/webdevcert.jpeg";
import photowallvideo from "../assets/photo_wall_assessment.webm";
import photowall from "../assets/photowall.png";
import rossumsVideo from "../assets/rossumsMenu.webm";
import rossumsMenu from "../assets/rossumsMenu.png";
import automateWithJS from "../assets/automate_with_javascript.png";
import "../styles/webDev.css";

/**
 * This fuction displays text and images for projects in the web development section of the web page.
 * 
 * @returns html 
 */

export default function WebDev() {
  return (
    <>
      <div className="d-flex flex-column ">
        <div id="header-text-div" className="text-center">
          <div id="header-text">
            <div className="text-cont">
              <div>
                <h1>Web Development</h1>
              </div>
              <div>
                <p>
                  Web Development was my initial foray into technology. I
                  quickly developed an interest in the logical processes of
                  coding to solve problems and was captivated by transforming
                  ideas into tangible, visible creations. The thrill of
                  resolving persistent bugs and implementing new concepts fuels
                  my motivation to continuously learn and enhance my development
                  skills.My motivation, drive, and growth mindset will make me a
                  valuable asset to any team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <h3>Projects</h3>
        </div>
        <div
          id="projects"
          className="mb-5 p-2 d-flex flex-wrap gap-5 justify-content-around"
        >
          <div className="text-center">
            <a
              href="https://gitlab.com/xanthonyalvarezx/assessment---react-photo-wall"
              target="_blank"
              rel="noreferrer"
            >
              <video
                poster={photowall}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={photowallvideo}
                width={"100%"}
                height={"100%"}
              ></video>
            </a>
          </div>
          <div className="text-center">
            <h5>Menue Style Switcher</h5>
            <a
              href="https://github.com/xanthonyalvarezx/ct-assessment-stylemenu"
              target="_blank"
              rel="noreferrer"
            >
              <video
                poster={rossumsMenu}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={rossumsVideo}
                width={"75%"}
                height={"75%"}
              ></video>
            </a>
          </div>
          <div className="text-center mt-5">
            <h5>Find and replace With JavaScript</h5>
            <img
              src={automateWithJS}
              alt="permission control with chmod"
              height={"100%"}
              width={"100%"}
              style={{ border: "1px solid black" }}
            />
          </div>
        </div>
        <div id="certifications">
          <div className="text-center mb-5">
            <h3>Certifications</h3>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-3">
            <div className="ms-3 w-50">
              <a
                href="https://www.coursera.org/account/accomplishments/professional-cert/UKLW48FLEVJ6"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={devCert}
                  alt="web developer certification"
                  width="75%"
                  style={{ border: "1px solid black" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
