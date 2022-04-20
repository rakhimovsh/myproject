import "./AboutMe.scss";
import img from "../../Assets/Images/my-img.jpg";
import resume from "../../Assets/Files/resume.pdf";

function AboutMe() {
  return (
    <section className="about container pt-5 pb-5">
      <img id="about" className="about__img" src={img} alt="my image" />
      <div className="about__inner">
        <h2>About me</h2>
        <p className="about__desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          repudiandae. Numquam explicabo dolore non excepturi tempore nemo
          voluptates dolor, labore ab. Iure laudantium voluptate delectus,
          obcaecati quam, numquam, ex eius aliquid corporis error adipisci ut
          eveniet. Dolorem molestias, ipsum, quisquam recusandae culpa, officia
          quis numquam molestiae ipsa non aut sint.
        </p>
        <button
          onClick={() => (window.location.href = resume)}
          className="btn btn-primary mt-3"
        >
          My resume
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
