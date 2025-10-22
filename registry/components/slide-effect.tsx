'use client';

import { HTMLMotionProps } from 'motion/react';
import { PropsWithChildren } from 'react';
import { motion } from 'motion/react';
type SlideEffectProps = HTMLMotionProps<'div'> &
  PropsWithChildren & {
    from?: 'left' | 'right' | 'top' | 'bottom';
    delay?: number;
    once?: boolean;
  };

function SlideEffect({
  children,
  from = 'left',
  delay = 0,
  once = true,
  ...props
}: SlideEffectProps) {
  const initial = {
    x: from === 'left' ? '-100%' : from === 'right' ? '100%' : 0,
    y: from === 'top' ? '-100%' : from === 'bottom' ? '100%' : 0,
    opacity: 0
  };
  const end = {
    x: 0,
    y: 0,
    opacity: 1
  };
  return (
    <motion.div
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

export { SlideEffect, type SlideEffectProps };
