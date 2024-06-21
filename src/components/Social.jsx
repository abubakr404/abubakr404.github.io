import { IconButton, Stack } from "@mui/material";
import { FaFacebookF, FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const IconButtonFilled = ({ link, Icon }) => (
  <IconButton
    href={link}
    target="_blank"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: `var(--text-element-dark)`,
      color: "var(--text-dark)",
      borderRadius: "50%",
      width: 36,
      height: 36,
      fontSize: 18,
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transition: "all 0.3s ease-in-out",
        color: `var(--text-element-dark)`,
        bgcolor: "var(--text-dark)",
      },
    }}
  >
    <Icon />
  </IconButton>
);

// const Social = ({ links }) => {
const Social = () => {
  const links = [
    {
      id: 1,
      link: "https://www.facebook.com/abubakr404",
      icon: FaFacebookF,
    },
    {
      id: 2,
      link: "https://twitter.com/abubakr_404",
      icon: FaXTwitter,
    },
    {
      id: 3,
      link: "https://linkedin.com/in/abubakr-hisham",
      icon: FaLinkedin,
    },
    {
      id: 4,
      link: "https://github.com/abubakr404",
      icon: FaGithub,
    },
    {
      id: 5,
      link: "https://wa.me/+966539581070",
      icon: FaWhatsapp,
    },
  ];

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        justifyContent: { sm: "center", md: "flex-start" },
        flexWrap: "wrap",
        mt: 2,
      }}
    >
      {links.map((link) => (
        <IconButtonFilled key={link.id} link={link.link} Icon={link.icon} />
      ))}
    </Stack>
  );
};

export default Social;
