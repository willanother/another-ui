import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type MarqueeProps = ComponentPropsWithoutRef<'div'> & {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
};

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        '[--duration:20s] [--gap:1rem] group flex gap-(--gap)',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 justify-around gap-(--gap)',
              vertical
                ? 'animate-marquee-vertical flex-col'
                : 'animate-marquee-horizontal flex-row',
              {
                'group-hover:paused': pauseOnHover,
                '[animation-direction:reverse]': reverse
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export { Marquee, type MarqueeProps };
