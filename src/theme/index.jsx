import { createTheme } from "@mui/material/styles";

// import { useMemo } from "react";
// import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import { palette } from "./palette";
import { shadows } from "./shadows";
import { overrides } from "./overrides";
import { typography } from "./typography";
import { customShadows } from "./custom-shadows";

// export const theme = createTheme({
//   typography: {
//     fontFamily: "inherit",
//   },
//   palette: {
//     primary: {
//       main: "#b7245c",
//       contrastText: "#f0f0f0",
//     },
//     secondary: {
//       main: "#f0f0f0",
//       contrastText: "#162a52",
//     },
//   },
// });
// const memoizedValue = useMemo(
//   () => (),
//   []
// );
export const theme = createTheme({
  palette: palette(),
  typography,
  shadows: shadows(),
  customShadows: customShadows(),
  shape: { borderRadius: 16 },
});

theme.components = overrides(theme);
