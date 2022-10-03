import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

/**
 * @returns {{
 *   theme: 'light' | 'dark',
 *   setTheme: (theme: 'light' | 'dark') => void,
 *   isDarkMode: boolean
 * }}
 */
export const useTheme = () => useContext(ThemeContext);
