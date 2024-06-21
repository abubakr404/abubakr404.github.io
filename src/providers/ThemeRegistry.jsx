"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

const ThemeRegistry = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{ key: "tuti" }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeRegistry;
