import CysecImage from "../assets/Hacking-And-Cyber-Security-129294-pixahive.jpg";
import fileCompare from "../assets/wiresharkfilecompare.png";
import incidentReport from "../assets/incident_report.png";
import courseraCert from "../assets/Coursera_cert.jpg";
import chmod from "../assets/chmod-linux.png";

/**
 * This fuction displays text and images for projects in the cybersecurity section of the web page.
 *
 * @returns html
 */

export default function Cysec() {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <div className="text-center">
          <h1>My Cyber security training</h1>
        </div>
        <div className="d-flex flex-wrap gap-3 flex-lg-nowrap">
          <div className="ms-2">
            <img src={CysecImage} alt="cyber security" width="100%" />
          </div>
          <div className="px-5">
            <p>
              I am very motivated to become a part of the cyber security
              landscpe. I am always one to help people and give knowledge to
              those who were less aware. I have had personal experiences with
              scammers. I want to be that line of defence that keeps people safe
              from the unseen threats. My learning has just begun. I intend to
              keep learning until I am able to successfully fill what I feel is
              my obligation as somone with the knowledge and resources to
              mitigate such threats.
            </p>
            <p>
              My path so far has led me to gain a cerificate in cybersecurity
              from Google through Coursera online. I have studied for and am in
              the process of completing my CompTia Security + exam. I also Have
              began to gain experience in Python programming language and tools
              such as Wireshark, tcpdump and others.
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <h3>Projects</h3>
        </div>
        <div
          id="projects"
          className="my-5 p-2 d-flex flex-wrap gap-5 justify-content-around"
        >
          <div className="text-center">
            <h5>
              Wireshark malicious IP scanner (click image for source code and
              use instructions)
            </h5>

            <a
              href="https://github.com/XalvarezX/wireshark-log-Search"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="ms-2"
                src={fileCompare}
                alt="File comparison script"
                height={"100%"}
                width={"100%"}
              />
            </a>
          </div>
          <div className="text-center">
            <h5>Incident report example</h5>
            <img
              className="ms-2"
              src={incidentReport}
              alt="incident report"
              height={"100%"}
              width={"100%"}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="text-center mt-5">
            <h5>Permission Control with Chmod</h5>
            <img
              className="ms-2"
              src={chmod}
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
                  src={courseraCert}
                  alt="certification from courdera in cyber security"
                  width="100%"
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
