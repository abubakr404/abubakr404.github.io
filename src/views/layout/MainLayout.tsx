import { navbarActions } from "@/store/navbar-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { useRef, RefObject } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";
import Divider from "@/components/Divider";

interface NavbarState {
  isOpened: boolean;
  isFilled: boolean;
}

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch: AppDispatch = useDispatch();

  const headerRef: RefObject<HTMLDivElement> = useRef(null);

  const { isOpened }: NavbarState = useSelector((state: RootState) => state.navbar);

  const currentMode = useSelector((state: RootState) => state.theme.mode);

  const fillToggle = () => {
    if (headerRef.current && headerRef.current.offsetTop > 0) {
      dispatch(navbarActions.filled(true));
    } else if (
      headerRef.current &&
      headerRef.current.offsetTop <= headerRef.current.offsetHeight &&
      !isOpened
    ) {
      dispatch(navbarActions.filled(false));
    }
  };
  return (
    <div className={`app${currentMode ? " toggleMode" : ""}`} onScroll={() => fillToggle()}>
      <Box
        component="header"
        sx={{
          transition: "all var(--main-transition) ease-out",
          height: "var(--header-height)",
          position: "sticky",
          zIndex: 10,
          color: "var(--light-primary-container)",
          top: "-1px",
        }}
        ref={headerRef}
      >
        <Navbar />
      </Box>
      {children}
      <footer>
        <div className="divider-footer">
          <Divider />
        </div>
        <p>
          Designed and Powered by -<span className="name">Abubakr</span>©{new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
export default MainLayout;
