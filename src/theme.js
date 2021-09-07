import { createTheme } from "@material-ui/core";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#524ea2",
      light: "#34a0bd",
      dark: "rgb(35 123 146)",
    },
  },
  typography: {
    fontFamily: `"Fira Sans Condensed", sans-serif`,
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#422fa1",
        },
      },
    },
  },
});
