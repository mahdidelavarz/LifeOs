import { create } from 'zustand';
import { Theme } from '../types/theme';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => {
    document.documentElement.className = theme; // Apply theme class to <html>
    set({ theme });
  },
}));

export default useThemeStore;

