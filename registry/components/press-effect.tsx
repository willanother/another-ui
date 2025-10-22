'use client';

import { HTMLMotionProps } from 'motion/react';
import { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

type PressEffectProps = HTMLMotionProps<'div'> & PropsWithChildren;
function PressEffect({ children, ...props }: PressEffectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
export { PressEffect, type PressEffectProps };
