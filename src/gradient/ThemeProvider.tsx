import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  trailEnabled: boolean;
  toggleTrail: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ 
  theme: 'light', 
  toggleTheme: () => {},
  trailEnabled: false,
  toggleTrail: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [trailEnabled, setTrailEnabled] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleTrail = () => setTrailEnabled(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, trailEnabled, toggleTrail }}>
      {children}
    </ThemeContext.Provider>
  );
};
