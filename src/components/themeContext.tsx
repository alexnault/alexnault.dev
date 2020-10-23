import React, {
  useReducer,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";
// import useMediaQuery from '@material-ui/core/useMediaQuery'
import { CssBaseline, PaletteType } from "@material-ui/core";
import {
  ThemeProvider as MuiThemeProvider,
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
      main: paletteType === "light" ? "#d81188" : pink[200],
    },
    secondary: {
      main: paletteType === "light" ? "#006cee" : blue[200],
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
        "Inter",
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

export const DispatchContext = createContext<
  (options: Partial<ThemeOptions>) => void
>(() => {
  throw new Error("Forgot to wrap component in `ThemeProvider`");
});

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const localTheme =
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
    null;
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const preferredType = prefersDarkMode ? "dark" : "light";

  const preferredType = localTheme === "dark" ? "dark" : "light";

  const [options, setOptions] = useReducer(
    (state: ThemeOptions, action: Partial<ThemeOptions>) => {
      typeof window !== "undefined" &&
        window.localStorage.setItem("theme", action.paletteType);
      return { ...state, ...action };
    },
    {
      paletteType: preferredType,
    }
  );

  const theme = useMemo(() => createTheme(options), [options]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <DispatchContext.Provider value={setOptions}>
        {children}
      </DispatchContext.Provider>
    </MuiThemeProvider>
  );
}

export function useChangeTheme() {
  const setOptions = useContext(DispatchContext);
  return useCallback((options: Partial<ThemeOptions>) => setOptions(options), [
    setOptions,
  ]);
}
