import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import React from 'react'; // Importing React for JSX processing

// Create new breakpoints
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px'
};

// Extend the theme with new breakpoints
const theme = extendTheme({ breakpoints });

// Props definition for ThemeProvider component
interface ThemeProviderProps {
  children: React.ReactNode; // Proper type for children
}

// Component to provide the theme across your app
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
