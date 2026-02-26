import { useScramble } from '../../../hooks/useScramble';

export const HeroTitle = () => {
  const { displayText, scramble, reset } = useScramble('Nat Wetzel');

  return (
    <h1 className="text-2xl box-border caret-transparent leading-8">
      <span
        role="text"
        className="box-border caret-transparent"
        onMouseEnter={scramble}
        onMouseLeave={reset}
      >
        {displayText}
      </span>
    </h1>
  );
};
