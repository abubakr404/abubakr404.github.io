import { createContext } from "react";

const INIT_STATE = {
  about: {
    details: "",
    title: "demo title",
    imageLink: "",
  },
  contact: {
    SendAgainButton: "demo title",
    phoneNumber: "+1234567890",
    SendButton: "demo title",
    contactTitle: "demo title",
    messageOfThanks: "Thanks you for test.",
    contactInfo: "",
    emailLink: "abubakr.hisham@hotmail.com",
  },
  general: {
    contactHeadingTitle: "Contact",
    blogsNavigatorTitle: "#blogs",
    logoImg: "",
    blogsHeadingTitle: "Blogs",
    heroNavigatorTitle: "#home",
    siteTitle: "Abubakr",
    twitterLink: "#",
    aboutHeadingTitle: "About Me",
    portfolioNavigatorTitle: "#portfolio",
    heroHeadingTitle: "hero",
    contactNavigatorTitle: "#contact",
    codePenLink: "#",
    gitHubLink: "#",
    aboutNavigatorTitle: "#about",
    linkedinLink: "#",
    portfolioHeadingTitle: "Latest Works",
    facebookLink: "#",
  },
  hero: {
    rightLink: "#",
    centerLink: "#",
    heroDetails:
      "Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events",
    heroTitle: "Hey I'm Abubakr, Frontend developer",
    leftLink: "#",
    centerLinkTitle: "#",
    rightLinkTitle: "contact me",
    leftLinkTitle: "demo title",
  },
  profile: {
    name: "abubakr hisham",
    imageLink: "",
    email: "beko2t1@gmail.com",
  },
};

export const SiteDataContext = createContext(null);
