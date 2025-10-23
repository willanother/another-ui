'use client';

import { cn } from '@/lib/utils';
import { motion, useAnimation, Variants } from 'motion/react';
import React, { useEffect, useState } from 'react';

type RevealBoxProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  boxColor?: string;
  once?: boolean;
  from?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
};

function RevealBox({
  children,
  className,
  duration,
  boxColor = '#5046e6',
  once = false,
  from = 'bottom',
  delay = 0
}: RevealBoxProps) {
  const mainControls = useAnimation();
  const [mainVariants, setMainVariants] = useState<Variants>();
  const slideControls = useAnimation();
  const [slideVariants, setSlideVariants] = useState<Variants>();
  useEffect(() => {
    switch (from) {
      case 'left':
        setMainVariants({
          hidden: { opacity: 0, x: '-100%' },
          visible: { opacity: 1, x: 0 }
        });
        setSlideVariants({
          hidden: { left: 0 },
          visible: { left: '100%' }
        });
        break;
      case 'right':
        setMainVariants({
          hidden: { opacity: 0, x: '100%' },
          visible: { opacity: 1, x: 0 }
        });
        setSlideVariants({
          hidden: { right: 0 },
          visible: { right: '100%' }
        });
        break;
      case 'top':
        setMainVariants({
          hidden: { opacity: 0, y: '-100%' },
          visible: { opacity: 1, y: 0 }
        });
        setSlideVariants({
          hidden: { top: 0 },
          visible: { top: '100%' }
        });
        break;
      case 'bottom':
        setMainVariants({
          hidden: { opacity: 0, y: '100%' },
          visible: { opacity: 1, y: 0 }
        });
        setSlideVariants({
          hidden: { bottom: 0 },
          visible: { bottom: '100%' }
        });
        break;
    }
  }, [from]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        variants={mainVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: delay + 0.2 }}
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
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: duration ? duration : 0.5,
          ease: 'easeIn',
          delay: delay
        }}
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

export { RevealBox, type RevealBoxProps };
