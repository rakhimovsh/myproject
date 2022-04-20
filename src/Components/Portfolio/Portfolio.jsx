import "./Portfolio.scss";
import bootstrap from "../../Assets/Images/bootstrap-logo.png";
import js from "../../Assets/Images/js.png";
import react from "../../Assets/Images/react.png";

function Portfolio() {
  return (
    <section className="pt-5 pb-5 portfolio">
      <div className="container">
        <h2 id="portfolio" className="portfolio__title mb-5">
          Portfolio
        </h2>
        <ul className="portfolio__list">
          <li
            data-aos="fade-right"
            className="portfolio__item d-flex flex-column"
          >
            <a
              className="portfolio__link"
              target="_blank"
              href="https://weather-best.netlify.app"
            >
              <div className="d-flex flex-column portfolio__inner">
                <span className="portfolio__name mb-4">Weather</span>
                <div>
                  <img
                    className="portfolio__img--bootstrap"
                    src={bootstrap}
                    alt=""
                  />
                  <img className="portfolio__img--js ms-4" src={js} alt="" />
                </div>
              </div>
            </a>
            <a
              className="pt-4 text-black fs-3"
              href="https://github.com/rakhimovsh/weather"
            >
              GitHub
            </a>
          </li>
          <li
            data-aos="fade-left"
            className="portfolio__item d-flex flex-column"
          >
            <a
              className="portfolio__link"
              target="_blank"
              href="https://jolly-peony-48c983.netlify.app"
            >
              <div className="d-flex flex-column portfolio__inner">
                <span className="portfolio__name mb-4">YouTube clone</span>
                <div>
                  <img
                    className="portfolio__img--bootstrap"
                    src={bootstrap}
                    alt=""
                  />
                  <img className="ms-4 portfolio__img--js" src={js} alt="" />
                  <img
                    className="ms-4 portfolio__img--react"
                    src={react}
                    alt=""
                  />
                </div>
              </div>
            </a>
            <a
              className="pt-4 text-black fs-3"
              href="https://github.com/rakhimovsh/YouTube-clone"
            >
              GitHub
            </a>
          </li>
          <li
            data-aos="fade-right"
            className="portfolio__item d-flex flex-column"
          >
            <a
              className="portfolio__link"
              target="_blank"
              href="https://best-of-the-best-movie.netlify.app"
            >
              <div className="d-flex flex-column portfolio__inner">
                <span className="portfolio__name mb-4">Movies</span>
                <div>
                  <img
                    className="portfolio__img--bootstrap"
                    src={bootstrap}
                    alt=""
                  />
                  <img className="ms-4 portfolio__img--js" src={js} alt="" />
                </div>
              </div>
            </a>
            <a
              className="pt-4 text-black fs-3"
              href="https://github.com/rakhimovsh/movie"
            >
              GitHub
            </a>
          </li>
          <li
            data-aos="fade-left"
            className="portfolio__item d-flex flex-column"
          >
            <a
              className="portfolio__link"
              target="_blank"
              href="https://sleepy-bassi-6761c1.netlify.app"
            >
              <div className="d-flex flex-column portfolio__inner">
                <span className="portfolio__name mb-4">ToDo list</span>
                <div>
                  <img
                    className="portfolio__img--bootstrap"
                    src={bootstrap}
                    alt=""
                  />
                  <img className="ms-4 portfolio__img--js" src={js} alt="" />
                  <img
                    className="ms-4 portfolio__img--react"
                    src={react}
                    alt=""
                  />
                </div>
              </div>
            </a>
            <a
              className="pt-4 text-black fs-3"
              href="https://github.com/rakhimovsh/todo-react-"
            >
              GitHub
            </a>
          </li>
          <li
            data-aos="fade-right"
            className="portfolio__item d-flex flex-column"
          >
            <a
              className="portfolio__link"
              target="_blank"
              href="https://winner-bookshelter.netlify.app"
            >
              <div className="d-flex flex-column portfolio__inner">
                <span className="portfolio__name mb-4">Bookshelter</span>
                <div>
                  <img
                    className="portfolio__img--bootstrap"
                    src={bootstrap}
                    alt=""
                  />
                  <img className="ms-4 portfolio__img--js" src={js} alt="" />
                  <img
                    className="ms-4 portfolio__img--react"
                    src={react}
                    alt=""
                  />
                </div>
              </div>
            </a>
            <a
              className="pt-4 text-black fs-3"
              href="https://github.com/rakhimovsh/bookshelter"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
