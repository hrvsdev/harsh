import fb from "../assests/fb.png";
import twitter from "../assests/twitter.png";
import github from "../assests/github.png";
import ig from "../assests/ig.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="icon-links">
          <a href="https://github.com/kingvyas" rel="noreferrer" target="_blank">
            <img src={github} alt="" title="Github" />
          </a>
          <a href="https://twitter.com/itsharshvyas" rel="noreferrer" target="_blank">
            <img src={twitter} alt="" title="Twitter" />
          </a>
          <a href="https://instagram.com/iamharshvyas" rel="noreferrer" target="_blank">
            <img src={ig} alt="" title="Instagram" />
          </a>
          <a href="https://facebook.com" rel="noreferrer" target="_blank">
            <img src={fb} alt="" title="Facebook" />
          </a>
        </div>
      </footer>
    </>
  );
}
