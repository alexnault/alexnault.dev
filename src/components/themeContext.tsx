import React, {
  useReducer,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  darken,
} from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import { CssBaseline, PaletteType } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";

export type ThemeOptions = {
  paletteType: PaletteType;
};

export function createTheme({ paletteType }: ThemeOptions) {
  const palette = createPalette({
    type: paletteType,
    primary: {
      main: paletteType === "light" ? blue[700] : blue[200],
    },
    secondary: {
      main: paletteType === "light" ? darken(pink.A400, 0.1) : pink[200],
    },
  });

  const theme = createMuiTheme({
    palette,
    breakpoints: {
      values: {
        xs: 0,
        sm: 776, // 728 + (24 * 2)
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
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
        fontSize: "1.25rem", // 20px
      },
      body2: {
        fontSize: "1.125rem", // 18px
      },
      subtitle1: {
        fontSize: "1.25rem", // 20px
        fontWeight: 700,
      },
      subtitle2: {
        fontSize: "1.125rem", // 18px
        fontWeight: 700,
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
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

  // TODO
  const them2 = responsiveFontSizes(theme);

  return theme;
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
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersDarkMode = false;

  const preferredType = prefersDarkMode ? "dark" : "light";

  const [options, setOptions] = useReducer(
    (state: ThemeOptions, action: Partial<ThemeOptions>) => {
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
