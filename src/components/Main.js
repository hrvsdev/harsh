import email from "../assests/email1.png";
import linkedin from "../assests/linkedin.png";

export default function Main() {
  return (
    <>
      <main className="main-body">
        <div className="main-links">
          <a
            href="mailto:kumarvyasss@gmail.com"
            className="email"
            rel="noreferrer"
            target="_blank"
          >
            <img src={email} alt="" />
            <div className="email-text">Email</div>
          </a>
          <a
            href="https://www.linkedin.com"
            className="linkedin"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="" />
            <div className="linkedin-text">LinkedIn</div>
          </a>
        </div>
        <div className="abt-int">
          <div className="about">
            <h4>About</h4>
            <div className="about-text">
              I am Harsh Vyas and I am a <b>Full Stack Web</b> developer and
              sharping my skills in <b>Mobile App</b> development too.
            </div>
          </div>
          <div className="interest">
            <h4>Intersets</h4>
            <div className="interest-text">
              I am interested in <b>UI/UX</b> designing, <b>vector images</b>{" "}
              and really want to learn about <b>Graphics</b> and{" "}
              <b>Animation</b>.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
