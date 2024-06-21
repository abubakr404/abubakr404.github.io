import { styled } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";
import { aboutSection } from "../../assets/images";

// Styled components using MUI
const AboutSection = styled("section")({
  padding: "2rem 0",
});

const AboutContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
}));

const AboutFigure = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  width: `calc(50% - ${theme.spacing(2)})`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const AboutImage = styled("img")({
  maxWidth: "100%",
});

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: "0 0 auto",
  width: `calc(50% - ${theme.spacing(2)})`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "calc(1rem + 1vw)",
  margin: 0,
  fontWeight: 600,
}));

const Lead = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 300,
  margin: theme.spacing(2, 0),
}));

const About = () => {
  return (
    <AboutSection id="about">
      <Typography variant="h2" className="special-head" title="About Me">
        About Me
      </Typography>
      <AboutContainer>
        <AboutFigure>
          <AboutImage src={aboutSection} alt="About Section Image" />
        </AboutFigure>
        <Content>
          <Title variant="h3">
            I'm Abubakr, a dedicated web developer with a passion for creating exceptional digital
            experiences.
          </Title>
          <Lead>
            My journey in web development has led me to master a versatile set of technologies,
            including React.js, Next.js, HTML, CSS, Sass, JavaScript, Express.js, Node.js, MongoDB,
            Firebase, and more.
          </Lead>
          <Lead>
            Whether you're a business looking to enhance your online presence or a recruiter seeking
            a talented web developer, I'm here to bring your projects to life. Let's collaborate and
            make your vision a reality. Feel free to reach out and let's discuss how I can
            contribute to your success.
          </Lead>
        </Content>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
