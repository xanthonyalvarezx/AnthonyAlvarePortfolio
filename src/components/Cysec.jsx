import CysecImage from "../assets/Hacking-And-Cyber-Security-129294-pixahive.jpg";
import fileCompare from "../assets/wiresharkfilecompare.png";
import incidentReport from "../assets/incident_report.png";
import courseraCert from "../assets/Coursera_cert.jpg";
import chmod from "../assets/chmod-linux.png";
export default function Cysec() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="text-center">
          <h1>My Cyber security training</h1>
        </div>
        <div className="d-flex flex-wrap flex-lg-nowrap">
          <div className="ms-2">
            <img src={CysecImage} alt="cyber security" width="800px" />
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
              My path so far has led my to gain a cerificate in cybersecurity
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
          className="my-5 py-3 d-flex flex-wrap justify-content-around"
        >
          <div className="text-center">
            <h5>Wireshark malicious IP scanner</h5>

            <a
              href="https://github.com/XalvarezX/wireshark-log-Search"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="ms-2"
                src={fileCompare}
                alt="File comparison script"
                height={"800px"}
                width={"800px"}
              />
            </a>
          </div>
          <div className="text-center">
            <h5>Incident report example</h5>
            <img
              className="ms-2"
              src={incidentReport}
              alt="incident report"
              height={"800px"}
              width={"800px"}
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="text-center mt-5">
            <h5>Permission Control with Chmod</h5>
            <img
              className="ms-2"
              src={chmod}
              alt="permission control with chmod"
              height={"800px"}
              width={"800px"}
              style={{ border: "1px solid black" }}
            />
          </div>
        </div>
        <div id="certifications">
          <div className="text-center mb-5">
            <h3>Certifications</h3>
          </div>
          <div className="d-flex flex-wrap justify-content-around mb-3">
            <div className="ms-3">
              <a
                href="https://coursera.org/verify/M3NSSJHQAVDQ"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={courseraCert}
                  alt="certification from courdera in cyber security"
                  width="50%"
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