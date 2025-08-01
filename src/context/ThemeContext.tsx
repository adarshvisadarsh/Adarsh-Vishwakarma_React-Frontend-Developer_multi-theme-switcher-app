import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../styles/themes';
import { Theme } from '../types/theme';

type ThemeKey = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: Theme;
  setThemeKey: (key: ThemeKey) => void;
  currentKey: ThemeKey;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultKey = (localStorage.getItem('theme') as ThemeKey) || 'theme1';
  const [themeKey, setThemeKey] = useState<ThemeKey>(defaultKey);

  useEffect(() => {
    localStorage.setItem('theme', themeKey);
  }, [themeKey]);

  const value: ThemeContextType = {
    theme: themes[themeKey],
    setThemeKey,
    currentKey: themeKey,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeContext must be used inside ThemeProvider");
  return ctx;
};
