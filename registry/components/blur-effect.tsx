'use client';

import { HTMLMotionProps } from 'motion/react';
import { PropsWithChildren } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type BlurEffectProps = HTMLMotionProps<'div'> &
  PropsWithChildren & {
    delay?: number;
    once?: boolean;
    size?: number;
  };

function BlurEffect({
  children,
  delay = 0.2,
  once = true,
  className,
  size = 8,
  ...props
}: BlurEffectProps) {
  const initial = {
    filter: `blur(${size}px)`
  };
  const end = {
    filter: 'none'
  };
  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      initial={initial}
      transition={{ type: 'spring', stiffness: 400, damping: 17, delay }}
      whileInView={end}
      viewport={{ once }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { BlurEffect, type BlurEffectProps };
