import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderLegacy } from "@mui/material";
import getTheme from './base';

export const CustomThemeContext = React.createContext({
  currentTheme: 'light',
  setTheme: (name: string) => {},
});

function CustomThemeProvider(props: any) {
  const { children } = props;

  let currentTheme = 'light';
  if (typeof window !== "undefined") {
    currentTheme = window.localStorage.getItem('appTheme') || 'light';
  }
  const [themeName, _setThemeName] = useState(currentTheme);
  const theme = getTheme(themeName);

  const setThemeName = (name: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem('appTheme', name);
    }
    _setThemeName(name);
  };

  const contextValue = useMemo(
    () => ({
      currentTheme: themeName,
      setTheme: setThemeName,
    }),
    [themeName],
  );

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <ThemeProviderLegacy theme={theme}>
          {children}
        </ThemeProviderLegacy>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export default CustomThemeProvider;
