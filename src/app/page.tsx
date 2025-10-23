import { PressEffect } from '$/registry/components/press-effect';
import { SlideEffect } from '$/registry/components/slide-effect';
import { Button } from '@/components/ui/button';
import MarqueeDemo from './marquee-demo';
import { GradientText } from '$/registry/components/gradient-text';
import { ClipPathWrapper } from '$/registry/components/clip-path-wrapper';
import { IsolateClient } from '$/registry/components/isolate-client';
import { RippleEffect } from '$/registry/components/ripple-effect';
import { RevealBox } from '$/registry/components/reveal-box';
import { BeamBorder } from '$/registry/components/beam-border';
import { BorderShine } from '$/registry/components/shine-border';
import { BlurEffect } from '$/registry/components/blur-effect';
import { AnimatedTheme } from '$/registry/components/animate-theme';

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
      <img
        className="w-full h-auto [clip-path:path('M100_0L200_100L100_200L0_100Z')]"
        src="https://api.xsot.cn/bing?jump=true"
      />
      <IsolateClient>
        <ClipPathWrapper>
          <img
            className="w-full h-auto"
            src="https://api.xsot.cn/bing?jump=true"
          />
        </ClipPathWrapper>
      </IsolateClient>
      <PressEffect>
        <RippleEffect>
          <Button>RippleEffect</Button>
        </RippleEffect>
      </PressEffect>
      <BlurEffect>
        <img
          className="w-full h-auto"
          src="https://api.xsot.cn/bing?jump=true"
        />
      </BlurEffect>

      <AnimatedTheme duration={30}/>

      <RevealBox className="[--box-color:red]" delay={0.2}>
        <GradientText className="text-3xl font-bold" text="Gradient Text" />
      </RevealBox>
      <div className="w-96 h-80 bg-white shadow-2xl rounded-2xl relative">
        <BeamBorder borderWidth={2} size={200} />
      </div>
      <div className="w-96 h-80 bg-white shadow-2xl rounded-2xl relative">
        <BorderShine
          borderWidth={2}
          shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        />
      </div>
    </div>
  );
}
