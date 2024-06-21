import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: "#FFFFFF",
  100: "#F3F3F3",
  200: "#F0F0F0",
  300: "#D9D9D9",
  400: "#B5B5B5",
  500: "#989898",
  600: "#6f6f6f",
  700: "#5b5b5b",
  800: "#3d3d3d",
  900: "#1d1d1d",
};

export const primary = {
  light: "#c54f7c",
  main: "#B7245C",
  dark: "#801940",
  contrastText: "#FFFFFF",
};

export const secondary = {
  light: "#f9f9f9",
  // light: "#646f83",
  main: "#e7e7e7",
  // main: "#3E4B65",
  dark: "#dedede",
  // dark: "#2b3446",
  darker: "#d6d6d6",
  // contrastText: "#FFFFFF",
  contrastText: "#707070",
};

export const info = {
  lighter: "#85c6ff",
  light: "#5bb0ff",
  main: "#2f80ed",
  dark: "#2f5dc7",
  darker: "#2c3da6",
  contrastText: "#FFFFFF",
};

export const success = {
  lighter: "#C8FAD6",
  light: "#5BE49B",
  main: "#00A76F",
  dark: "#007867",
  darker: "#004B50",
  contrastText: "#FFFFFF",
};

export const warning = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: grey[800],
};

export const error = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};

export const common = {
  black: "#000000",
  white: "#FFFFFF",
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: "light",
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: "#FFFFFF",
      card: grey[200],
      default: grey[100],
      neutral: grey[200],
      success: success.lighter,
      info: info.lighter,
      warning: warning.lighter,
      error: error.lighter,
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
