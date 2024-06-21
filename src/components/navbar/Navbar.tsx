import { FaBars, FaCircleHalfStroke } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { navbarActions } from "@/store/navbar-slice";
import { themeActions } from "@/store/theme-slice";
import logo from "/public/logo.svg";
import Image from "next/image";
import { RootState } from "@/store";
import { Box, Container, IconButton, Link, Stack } from "@mui/material";
import { NavItem } from "@/types";
import { mainNavigation } from "@/config/navbar";

interface NavbarState {
  isOpened: boolean;
  isFilled: boolean;
}

const NavLink: React.FC<NavItem> = ({ path, title }) => {
  return (
    <Box
      component="li"
      sx={{
        height: "calc(var(--header-height) - 1rem)",
      }}
    >
      <Link
        sx={{
          textTransform: "capitalize",
          position: "relative",
          padding: "0.5rem",
          height: "100%",
          "&:after": {
            content: "''",
            position: "absolute",
            bc: "var(--light-primary-container)",
            bottom: 0,
            right: 0,
            height: "0.125rem",
            willChange: "width",
            width: "100%",
            transform: "translateX(50%)",
            transition: "transform var(--main-transition) ease-out",
          },
          "&:hover:after, &:focus:after, &.active:after": {
            width: "calc(100% - 0.5rem)",
          },
        }}
        href={path}
      >
        {title}
      </Link>
    </Box>
  );
};

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpened, isFilled }: NavbarState = useSelector((state: RootState) => state.navbar);

  return (
    <Stack
      direction="row"
      alignItems="center"
      component="nav"
      className={`${isFilled ? " filled" : ""}`}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        transition: "all var(--main-transition) ease-out",
        px: "0.5rem",
        overflow: "hidden",
        position: "relative",
        "&:before": {
          content: "''",
          zIndex: -1,
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: `filledColorEnd var(--main-transition) ease-out forwards`,
        },
        "&.filled": {
          boxShadow: "0 0.125rem 0.25rem rgba(#0f1628, 0.5)",
          p: 0,
          "&:before": {
            animation: `filledColorStart var(--main-transition) ease-out forwards`,
          },
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fexWrap: "wrap",
          "@media (max-width: 768px)": {
            flexGrowth: 1,
          },
        }}
      >
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(var(--header-height) - 1rem)",
            fontWeight: 600,
            gap: "0.125rem",
            py: "0.125rem",
            fontSize: "1.5rem",
            whiteSpace: "nowrap",
          }}
          href="/"
        >
          <Image src={logo} alt="logo" />
          Abubakr
        </Link>
        <IconButton
          sx={{
            fontSize: "1.5rem",
            alignSelf: "center",
            padding: "0.125rem 0.5rem",
            display: {
              xs: "block",
              md: "none",
            },
          }}
          onClick={() => dispatch(navbarActions.toggleNavbar())}
        >
          <FaBars />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            transition: "all var(--main-transition) ease-out",
            "@media (max-width: 768px)": {
              transform: isOpened ? "translateY(0)" : "translateY(-4rem)",
              maxHeight: isOpened ? "100vh" : "0vh",
              opacity: isOpened ? 1 : 0,
              visibility: isOpened ? "visible" : "hidden",
              overflow: "hidden",
              pb: isOpened ? "1.5rem" : 0,
              flex: "1 100%",
            },
          }}
        >
          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              "@media (max-width: 768px)": {
                border: "0.125rem solid",
                p: "0.625rem 1.5rem",
                borderRadius: "var(--main-border-radius)",
              },
            }}
          >
            {mainNavigation.map((item) => (
              <NavLink key={item.title} {...item} />
            ))}
          </Box>
          <IconButton
            sx={{
              alignSelf: "center",
              marginLeft: "1rem",
              padding: "0.25rem 0.5rem",
              "@media (max-width: 768px)": {
                margin: "0.5rem 0 auto 1rem",
              },
            }}
            onClick={() => dispatch(themeActions.toggle())}
          >
            <FaCircleHalfStroke />
          </IconButton>
        </Box>
      </Container>
    </Stack>
  );
};

export default Navbar;
