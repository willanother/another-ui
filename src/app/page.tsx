import { PressEffect } from '$/registry/components/press-effect';
import { SlideEffect } from '$/registry/components/slide-effect';
import { Button } from '@/components/ui/button';
import MarqueeDemo from './marquee-demo';
import { GradientText } from '$/registry/components/gradient-text';
import { ClipPathWrapper } from '$/registry/components/clip-path-wrapper';
import { ClientIsolate } from '$/registry/components/client-isolate';
import { RippleEffect } from '$/registry/components/ripple-effect';

export default function Home() {
  return (
    <div className="w-full font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <PressEffect>
        <Button>Button</Button>
      </PressEffect>
      <SlideEffect delay={0.5}>
        <PressEffect>
          <Button>Aschild</Button>
        </PressEffect>
      </SlideEffect>
      <SlideEffect delay={0.5} once={false} from="bottom">
        <PressEffect>
          <Button>Aschild</Button>
        </PressEffect>
      </SlideEffect>
      <MarqueeDemo />
      <GradientText className="text-3xl font-bold" text="Gradient Text" />
      <GradientText className="text-3xl font-bold" text="Gradient Text" neon />
      <div className="g-container bg-black!"></div>
      <ClientIsolate>
        <ClipPathWrapper>
          <img
            className="w-full h-auto"
            src="https://api.xsot.cn/bing?jump=true"
          />
        </ClipPathWrapper>
      </ClientIsolate>

      <PressEffect>
        <RippleEffect>
          <Button>RippleEffect</Button>
        </RippleEffect>
      </PressEffect>
    </div>
  );
}
