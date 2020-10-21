import React, {
  useReducer,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, PaletteType } from "@material-ui/core";

import createTheme, { ThemeOptions } from "../theme";

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
