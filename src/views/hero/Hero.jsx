import { useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { Box, Container, Typography, Button } from "@mui/material";
import Divider from "@/components/Divider";
import Social from "@/components/Social";
import { FaAnglesDown } from "react-icons/fa6";
import personChair from "@/assets/images/person & chair.png";
import ellipse from "@/assets/images/Ellipse.svg";
import languages from "@/assets/images/languages.svg";
import pattern from "@/assets/images/pattern.png";
import screen from "@/assets/images/screen.png";
import backgroundSec from "@/assets/images/background-sec.png";

// Styled components using MUI
const HeroSection = styled("section")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
  backgroundRepeat: "no-repeat",
  backgroundSize: "400px, 30rem, contain, auto, auto",
  backgroundPosition: "0px -60px, 90% 90%, left top, center, center",
  marginTop: `calc(${theme.spacing(8)} / -1)`,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    backgroundSize: "250px, contain, auto, auto",
    backgroundPosition: "-40px -40px, left center, center, center",
  },
}));

const HeroContainer = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const HeroContent = styled(Box)({
  zIndex: 3,
  position: "relative",
});

const HeroTitle = styled(Typography)(({ theme }) => ({
  letterSpacing: "0.0625rem",
  lineHeight: 1.2,
  fontWeight: "bold",
  margin: theme.spacing(2, 0),
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.875rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "calc(1.475rem + 2vw)",
  },
}));

const HeroLead = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  fontWeight: 400,
  maxWidth: "31.25rem",
  lineHeight: 1.2,
  fontSize: "1.25rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
    margin: theme.spacing(2, "auto"),
  },
}));

const HeroActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  margin: theme.spacing(3, 0),
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
}));

const HeroFigure = styled(Box)(({ theme }) => ({
  zIndex: 1,
  padding: 0,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const AltWorkLink = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 9,
  fontSize: "2rem",
  bottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  "&:hover": {
    color: theme.palette.primary.light,
  },
  svg: {
    animation: "bouncing 1.5s infinite",
  },
}));

const Hero = () => {
  const heroRef = useRef(null);
  const setHeroBackground = () => {
    if (heroRef.current) {
      heroRef.current.style.backgroundImage =
        document.body.offsetWidth <= 991
          ? `url(${ellipse.src}), url(${pattern.src}), var(--hero-gradient)`
          : `url(${ellipse.src}), url(${languages.src}), url(${pattern.src}), var(--hero-gradient)`;
    }
  };

  useEffect(() => {
    setHeroBackground();
    window.addEventListener("resize", setHeroBackground);
    return () => window.removeEventListener("resize", setHeroBackground);
  }, []);

  return (
    <HeroSection ref={heroRef} id="home">
      <HeroContainer>
        <HeroContent>
          <HeroTitle variant="h1">Hey, I'm Abubakr, Passionate Web Developer</HeroTitle>
          <HeroLead variant="body1">
            My mission is to turn ideas into interactive and user-friendly websites and web
            applications. I thrive on solving complex problems and crafting solutions that not only
            meet but exceed expectations.
          </HeroLead>
          <HeroActions role="group">
            <Button
              href="https://drive.google.com/file/d/1fDdCcaUDnjsP0SDb1-zTr1deGp7hpCbc/"
              className="link light left-link"
              target="_blank"
            >
              Get Resume
            </Button>
            <Button href="#contact" className="link right-link">
              Contact Me
            </Button>
          </HeroActions>
          <Social />
        </HeroContent>
        <HeroFigure style={{ backgroundImage: `url(${screen.src}), url(${backgroundSec.src})` }}>
          <Box>
            <img src={personChair.src} alt="" className="cover-img" />
            <Button href="#portfolio" className="link primary work-link">
              projects
            </Button>
          </Box>
        </HeroFigure>
      </HeroContainer>
      <AltWorkLink>
        <FaAnglesDown />
      </AltWorkLink>
      <Divider />
    </HeroSection>
  );
};

export default Hero;
