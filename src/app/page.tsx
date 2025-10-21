import { Marquee } from '$/registry/components/marquee';
import PressEffect from '$/registry/components/press-effect';
import SlideEffect from '$/registry/components/slide-effect';
import { Button } from '@/components/ui/button';
import MarqueeDemo from './marquee-demo';

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
      <div className="bg-red-400 h-96"></div>
      <div className="bg-amber-400 h-96"></div>
      <div className="bg-red-400 h-96"></div>
      <div className="bg-amber-400 h-96"></div>
      <div className="bg-red-400 h-96"></div>
      <div className="bg-amber-400 h-96"></div>
      <SlideEffect delay={0.5} once={false} from="bottom">
        <PressEffect>
          <Button>Aschild</Button>
        </PressEffect>
      </SlideEffect>
      {/* <SlideEffect delay={0.5}> */}
      <div className="overflow-hidden">
        <MarqueeDemo />
      </div>
      {/* </SlideEffect> */}
    </div>
  );
}
