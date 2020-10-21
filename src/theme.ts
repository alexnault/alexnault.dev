import {
  createMuiTheme,
  responsiveFontSizes,
  darken,
} from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { blue, pink } from "@material-ui/core/colors";

export type ThemeOptions = {
  paletteType: PaletteType;
};

export default function createTheme({ paletteType }: ThemeOptions) {
  const palette = createPalette({
    type: paletteType,
    primary: {
      main: paletteType === "light" ? "#0070f3" : pink[200],
    },
    secondary: {
      main: paletteType === "light" ? blue[700] : blue[200],
    },
  });

  const breakpoints = createBreakpoints({
    values: {
      xs: 0,
      sm: 776, // 728 + (24 * 2)
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  });

  const theme = createMuiTheme({
    palette,
    breakpoints,
    typography: {
      fontFamily: [
        "Nunito",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
      body1: {
        fontSize: 20,
        [breakpoints.down("sm")]: {
          fontSize: 18,
        },
      },
      body2: {
        fontSize: 18,
        [breakpoints.down("sm")]: {
          fontSize: 16,
        },
      },
      subtitle1: {
        fontSize: 20,
        [breakpoints.down("sm")]: {
          fontSize: 18,
        },
      },
      subtitle2: {
        fontSize: 18,
        [breakpoints.down("sm")]: {
          fontSize: 16,
        },
      },
      button: {
        fontSize: 18,
        [breakpoints.down("sm")]: {
          fontSize: 16,
        },
      },
    },
    props: {
      MuiButtonBase: {
        // disableRipple: true,
      },
    },
    overrides: {
      MuiPaper: {
        rounded: {
          borderRadius: 8,
        },
      },
      MuiButton: {
        root: {
          fontWeight: 700,
        },
      },
      MuiTypography: {
        paragraph: {
          marginTop: 24,
          marginBottom: 24,
        },
      },
    },
    shadows: [
      "none",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
      "0 15px 30px rgba(0,0,0,.1)",
    ],
  });

  const responsiveTheme = responsiveFontSizes(theme, {
    variants: ["h1", "h2", "h3", "h4", "h5", "h6"],
  });

  return responsiveTheme;
}
