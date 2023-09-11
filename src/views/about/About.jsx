import { aboutSection } from "../../assets/images";
const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="special-head" title="About Me">
        About Me
      </h2>
      <div className="container">
        <div className="about-figure">
          <img className="about-img" src={aboutSection} alt="" />
        </div>
        <div className="content">
          <h3 className="title">
            I'm Abubakr, a dedicated web developer with a passion for creating exceptional
            digital experiences.
          </h3>
          <p className="lead">
            My journey in web development has led me to master a versatile set of
            technologies, including React.js, Next.js, HTML, CSS, Sass, JavaScript,
            Express.js, Node.js, MongoDB, Firebase, and more.
          </p>
          <p className="lead">
            Whether you're a business looking to enhance your online presence or a
            recruiter seeking a talented web developer, I'm here to bring your projects to
            life. Let's collaborate and make your vision a reality. Feel free to reach out
            and let's discuss how I can contribute to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
