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
          <h3 className="title">Hey I'm Abubakr, Frontend developer</h3>
          <p className="lead">
            Here Iam gonna share everything about my life. Books Iam reading, Games Iam
            Playing, Stories and Events Here Iam gonna share everything about my life.
            Books Iam reading, Games Iam Playing, Stories and Events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
