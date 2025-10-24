'use client';

import { ElementType, useRef } from 'react';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/utils';

interface AnimateThemeProps extends React.ComponentPropsWithoutRef<'div'> {
  duration?: number;
  toggle?: () => void;
  children: React.ReactNode;
  as?: ElementType;
}

function AnimateTheme({
  className,
  duration = 500,
  toggle = () => {},
  children,
  as: Component = 'div',
  ...props
}: AnimateThemeProps) {
  const ref = useRef<HTMLElement>(null);

  const toggleTheme = async () => {
    if (!ref.current) return;

    if (!document.startViewTransition) {
      console.warn('View transitions are not supported');
      toggle();
      return;
    } else {
      await document.startViewTransition(() => {
        flushSync(() => {
          toggle();
        });
      }).ready;
      const { top, left, width, height } = ref.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      );
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    }
  };

  return (
    <Component
      ref={ref}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { AnimateTheme, type AnimateThemeProps };
