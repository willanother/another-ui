'use client';

import React, {
  MouseEvent,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';

import { cn } from '@/lib/utils';

type RippleEffectProps = {
  rippleColor?: string;
  duration?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
} & PropsWithChildren;

function RippleEffect({
  className,
  children,
  rippleColor = '#fff',
  duration = '600ms',
  onClick,
  ...props
}: RippleEffectProps) {
  const [spanRipples, setSpanRipples] = useState<
    Array<{ x: number; y: number; size: number; key: number }>
  >([]);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    createRipple(event);
    onClick?.(event);
  };

  const createRipple = (event: MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() };
    setSpanRipples(prevRipples => [...prevRipples, newRipple]);
  };

  useEffect(() => {
    if (spanRipples.length > 0) {
      const lastRipple = spanRipples[spanRipples.length - 1];
      const timeout = setTimeout(() => {
        setSpanRipples(prevRipples =>
          prevRipples.filter(ripple => ripple.key !== lastRipple.key)
        );
      }, parseInt(duration));
      return () => clearTimeout(timeout);
    }
  }, [spanRipples, duration]);

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onClick={handleClick}
      {...props}
    >
      <span className="pointer-events-none absolute z-10 inset-0">
        {spanRipples.map(ripple => (
          <span
            className="animate-rippling bg-background absolute rounded-full opacity-30"
            key={ripple.key}
            style={{
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              top: `${ripple.y}px`,
              left: `${ripple.x}px`,
              backgroundColor: rippleColor,
              transform: `scale(0)`
            }}
          />
        ))}
      </span>
      {children}
    </div>
  );
}

export { RippleEffect, type RippleEffectProps };
