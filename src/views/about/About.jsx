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
        <div className="about-figure col-md-6">
          <img className="img-fluid" src={imageLink} alt="" />
        </div>
        <div className="content col-md-6">
          <h3 className="h1">{aboutTitle}</h3>
          <p className="lead">{details}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
