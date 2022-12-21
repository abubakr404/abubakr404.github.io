const About = ({
  title,
  headTitle,
  about: { details, title: aboutTitle, imageLink },
}) => {
  return (
    <section className="about" id={title}>
      <h2 className="special-head" title={headTitle}>
        {headTitle}
      </h2>
      <div className="container">
        <div className="about-figure">
          <img className="about-img" src={imageLink} alt="" />
        </div>
        <div className="content">
          <h3 className="title">{aboutTitle}</h3>
          <p className="lead">{details}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
