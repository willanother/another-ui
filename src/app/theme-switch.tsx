'use client';

import { Moon, Sun } from 'lucide-react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { AnimateTheme } from '$/registry/components/animate-theme';
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <AnimateTheme
      toggle={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <SwitchPrimitive.Root
        suppressHydrationWarning
        data-slot="switch"
        className={cn(
          'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=checked]:bg-input dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.63rem] w-12 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'
        )}
        checked={theme === 'dark'}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-6 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-[2px]',
            'flex justify-center items-center'
          )}
        >
          {theme == 'dark' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
    </AnimateTheme>
  );
}
