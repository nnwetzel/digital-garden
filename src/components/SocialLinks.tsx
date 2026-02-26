import { useScramble } from '@/hooks/useScramble';

export const SocialLinks = () => {
  const linkedin = useScramble('linkedin');
  const github = useScramble('github');

  return (
    <div className="box-border caret-transparent flex flex-wrap gap-x-1 justify-end w-full mt-10">
      <a
        href="https://www.linkedin.com/in/nnwetzel/"
        className="box-border caret-transparent block hover:text-blue-950 hover:bg-white"
        onMouseEnter={linkedin.scramble}
        onMouseLeave={linkedin.reset}
      >
        <span role="text" className="box-border caret-transparent">
          [{linkedin.displayText}]
        </span>
      </a>
      <p className="box-border caret-transparent">•</p>
      <a
        href="https://github.com/nnwetzel"
        className="box-border caret-transparent block hover:text-blue-950 hover:bg-white"
        onMouseEnter={github.scramble}
        onMouseLeave={github.reset}
      >
        <span role="text" className="box-border caret-transparent">
          [{github.displayText}]
        </span>
      </a>
    </div>
  );
};
