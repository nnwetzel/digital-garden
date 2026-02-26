import { useScramble } from '@/hooks/useScramble';

export const HeroSubtitle = () => {
  const { displayText, scramble, reset } = useScramble('Infra @ Zoox • Backend @ Amazon • CS @ Northeastern University');

  return (
    <h3
      className="text-slate-500 box-border caret-transparent mt-5 cursor-default"
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      <span role="text" className="box-border caret-transparent">
        {displayText}
      </span>
    </h3>
  );
};
