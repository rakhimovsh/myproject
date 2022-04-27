import "./Footer.scss";
import github from "../../Assets/Images/github.png";
import linkedin from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
import facebook from "../../Assets/Images/facebook.png";

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <h2 className="footer__title mb-4">Me in social networks</h2>
        <ul className="footer__list d-flex align-items-center flex-wrap justify-content-center">
          <li className="footer__item">
            <a href="https://github.com/RakhimovSh" target="_blank">
              <img
                className="footer__image"
                src={github}
                alt="github logo"
                width={100}
              />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.linkedin.com/in/shukurullo-rakhimov/"
              target="_blank"
            >
              <img
                className="footer__image"
                src={linkedin}
                alt="linkedin logo"
                width={100}
              />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.instagram.com/rakhimov_shukurullo_/?hl=en"
              target="_blank"
            >
              <img
                className="footer__image"
                src={instagram}
                alt="linkedin logo"
                width={100}
              />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.facebook.com/shukurullo.raximov.7"
              target="_blank"
            >
              <img
                className="footer__image"
                src={facebook}
                alt="linkedin logo"
                width={100}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
