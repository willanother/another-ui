'use client';

import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'motion/react';
import React from 'react';

type BoxRevealProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  boxColor?: string;
  once?: boolean;
};

function BoxReveal({
  children,
  className,
  duration,
  boxColor = '#5046e6',
  once = false
}: BoxRevealProps) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        variants={{
          hidden: { opacity: 1, y: '100%' },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
        viewport={{ once: once }}
        onViewportEnter={() => {
          mainControls.start('visible');
        }}
        onViewportLeave={() => {
          mainControls.stop();
          mainControls.set('hidden');
        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration ? duration : 0.5, ease: 'easeIn' }}
        viewport={{ once: once }}
        onViewportEnter={() => {
          slideControls.start('visible');
        }}
        onViewportLeave={() => {
          slideControls.stop();
          slideControls.set('hidden');
        }}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          background: `var(--box-color, ${boxColor})`
        }}
      />
    </div>
  );
}

export { BoxReveal, type BoxRevealProps };
