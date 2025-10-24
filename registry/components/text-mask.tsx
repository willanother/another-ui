'use client';

import React, { ElementType, ReactNode, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type TextMaskProps = {
  text: string;
  className?: string;
  children: ReactNode;
  fontSize?: string | number;
  fontWeight?: string | number;
  textAnchor?: string;
  dominantBaseline?: string;
  fontFamily?: string;
  as?: ElementType;
};

function TextMask({
  text,
  children,
  className = '',
  fontSize = 20,
  fontWeight = 'bold',
  textAnchor = 'middle',
  dominantBaseline = 'middle',
  fontFamily = 'sans-serif',
  as: Component = 'div'
}: TextMaskProps) {
  const [svgMask, setSvgMask] = useState('');

  useEffect(() => {
    const updateSvgMask = () => {
      const responsiveFontSize =
        typeof fontSize === 'number' ? `${fontSize}vw` : fontSize;
      const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${text}</text></svg>`;
      setSvgMask(newSvgMask);
    };

    updateSvgMask();
    window.addEventListener('resize', updateSvgMask);
    return () => window.removeEventListener('resize', updateSvgMask);
  }, [fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(
    svgMask
  )}")`;

  return (
    <Component
      className={cn('flex items-center justify-center', className)}
      style={{
        maskImage: dataUrlMask,
        WebkitMaskImage: dataUrlMask,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center'
      }}
    >
      {children}
    </Component>
  );
}

export { TextMask, type TextMaskProps };
