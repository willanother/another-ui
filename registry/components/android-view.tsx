import { cn } from '@/lib/utils';
import { SVGProps } from 'react';

type AndroidViewProps = {
  className?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
} & SVGProps<SVGSVGElement>;

function AndroidView({
  className,
  width = 380,
  height = 830,
  children,
  ...props
}: AndroidViewProps) {
  return (
    <div
      className={cn(`relative`, className)}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <svg
        className="absolute inset-0 pointer-events-none"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
          className="fill-black dark:fill-white"
        />
        <defs>
          <clipPath id="clip0_514_20855">
            <rect
              width="360"
              height="800"
              rx="33"
              ry="25"
              className="fill-black"
              transform="translate(9 14)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="absolute inset-0 z-2 pointer-events-none"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="189" cy="28" r="9" className="fill-black dark:fill-white" />
        <circle cx="189" cy="28" r="4" className="fill-black dark:fill-white" />
      </svg>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          padding: `16.5px 12.5px`
        }}
        className="relative z-1 [clip-path:url(#clip0_514_20855)] bg-black"
      >
        {children}
      </div>
    </div>
  );
}

export { AndroidView, type AndroidViewProps };
