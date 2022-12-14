import Hero from "../hero/Hero";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Blogs from "../blogs/Blogs";
import Contact from "../contact/Contact";
import { useContext } from "react";
import { SiteDataContext } from "../../context/SiteDataContext";

const Main = () => {
  const { general, hero, about, contact } = useContext(SiteDataContext);

  return (
    <>
      <Hero
        title={general.heroNavigatorTitle}
        headTitle={general.heroHeadingTitle}
        hero={hero}
      />
      <About
        title={general.aboutNavigatorTitle}
        headTitle={general.aboutHeadingTitle}
        about={about}
      />
      <Portfolio
        title={general.portfolioNavigatorTitle}
        headTitle={general.portfolioHeadingTitle}
      />
      <Blogs title={general.blogsNavigatorTitle} headTitle={general.blogsHeadingTitle} />
      <Contact
        title={general.contactNavigatorTitle}
        headTitle={general.contactHeadingTitle}
        contact={contact}
      />
    </>
  );
};

export default Main;
