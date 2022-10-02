import React, { createContext, useCallback, useMemo } from 'react';
import useLocalStorage from 'use-local-storage';
export const themes = {
  dark: 'dark',
  light: 'light',
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => { },
});

// @emotion has its own ThemeProvider and hooks, but it is not being used anywhere yet?
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('gallery-theme', themes.light);
  const handleChangeTheme = useCallback((newTheme) => {
    setTheme(newTheme);
  }, [setTheme]);

  const value = useMemo(() => ({
    theme,
    setTheme: handleChangeTheme,
    isDarkMode: theme === themes.dark
  }), [theme, handleChangeTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
