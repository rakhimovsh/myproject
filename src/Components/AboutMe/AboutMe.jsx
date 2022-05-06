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
          Very inquisitive and hardworking programmer, just finished forntend
          and learning backend. Can create web applications with React.js,
          easily learn other libraries as needed. If you are interested, you can
          contact me through social networks or the form below
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
