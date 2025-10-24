'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { AnimateTheme } from '$/registry/components/animate-theme';
export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <AnimateTheme
      toggle={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme == 'dark' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </AnimateTheme>
  );
}
