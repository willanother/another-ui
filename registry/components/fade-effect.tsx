'use client';

import { HTMLMotionProps } from 'motion/react';
import { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

type FadeEffectProps = HTMLMotionProps<'div'> &
  PropsWithChildren & {
    delay?: number;
    once?: boolean;
  };

function FadeEffect({
  children,
  delay = 0,
  once = true,
  ...props
}: FadeEffectProps) {
  const initial = {
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

export { FadeEffect, type FadeEffectProps };
