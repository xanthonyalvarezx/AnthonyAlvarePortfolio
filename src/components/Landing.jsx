import "../styles/landing.css";
import Accordion from "react-bootstrap/Accordion";
import portfolio_image from "../assets/portfolio_image.jpg";

/**
 * This fuction displays text and images for projects in the landing section of the web page.
 *
 * @returns html
 */

export default function Landing() {
  return (
    <>
      <div class="d-flex flex-column align-items-center m-4 gap-3">
        <div class="typing">
          <h1>This is me...</h1>
        </div>
        <div id="profile_photo" class="mt-3">
          <img src={portfolio_image} alt="Anthony Alvarez" />
        </div>
        <div>
          <p id="headline">
            My Name is Anthony Alvarez. I am a web developer and beginner cyber
            security analyst.
            <br />
          </p>
        </div>
        <div class="w-75">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>My Journey</Accordion.Header>
              <Accordion.Body>
                <p className="accordion-text">
                  My journey into the tech world began in 2020, right in the
                  midst of the pandemic. At the time, I was working in a
                  warehouse, but I felt a strong pull towards the tech industry.
                  Thankfully, my employer offered a program that allowed
                  associates to attend school for free, and I jumped at the
                  chance. I enrolled in Kenzie Academy's six-month introductory
                  bootcamp focused on web development basics. I did really well
                  in the program, which solidified my decision to pursue a
                  career in tech full-time. So, I left my warehouse job and
                  devoted myself entirely to my studies.
                </p>
                <p className="accordion-text">
                  After a year of intense learning, I graduated with top marks
                  and earned a certificate in web development. The bootcamp
                  covered everything from the MERN stack to Python with Django.
                  Soon after, I landed a position at a startup called
                  IncubateIQ, where I had the opportunity to build web
                  applications, including e-commerce and staffing software.
                  Working alongside a talented team of developers, I thrived in
                  an environment where we all learned from each other and grew
                  together.
                </p>
                <p className="accordion-text">
                  Within a year, my hard work paid off, and I was promoted from
                  Junior Developer to Developer. Unfortunately, recent funding
                  issues led to a layoff at the company. Despite this setback,
                  I'm excited about finding my next role and continuing my
                  journey in the tech industry. Whether it's in development or
                  cybersecurity, which I've been actively teaching myself and
                  earning certificates in, I'm determined to keep growing and
                  learning. One of the most important lessons I've learned in
                  tech is the necessity of never stopping learning.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What I Offer</Accordion.Header>
              <Accordion.Body>
                <p className="accordion-text">
                  {" "}
                  With my motivated demeanor and unwavering growth mindset, I
                  bring a dynamic energy to any team. As a firm believer in
                  collaboration and collective success, I naturally excel as a
                  team player, leveraging my skills and insights to contribute
                  effectively towards common goals. My commitment to excellence
                  ensures that I consistently strive to surpass expectations in
                  every endeavor, driven by a passion for continuous
                  improvement. Detail-oriented and meticulously organized, I
                  approach tasks with a thoroughness that ensures accuracy and
                  precision in all aspects of my work. Moreover, as a
                  self-starter, I proactively identify opportunities for
                  innovation and take initiative to implement solutions,
                  demonstrating my ability to adapt and thrive in dynamic
                  environments. With these attributes, I am poised to make
                  significant contributions to any company, facilitating growth,
                  efficiency, and success.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
