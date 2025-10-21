import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import { HTMLMotionProps } from 'motion/react';
import * as motion from 'motion/react-client';

export default function AnimateButton({
  className,
  variant,
  size,
  initial,
  transition,
  whileHover,
  whileTap,
  animate,
  exit,
  variants,
  ...props
}: HTMLMotionProps<'div'> &
  React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <motion.div
      initial={initial}
      transition={transition}
      animate={animate}
      exit={exit}
      variants={variants}
      whileHover={whileHover ? whileHover : { scale: 1.1 }}
      whileTap={whileTap ? whileTap : { scale: 0.9 }}
    >
      <Button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </motion.div>
  );
}
