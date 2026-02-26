import { Link, useLocation } from 'react-router-dom';
import { useScramble } from '@/hooks/useScramble';

export type NavLinkProps = {
  href: string;
  text: string;
  external?: boolean;
};

export const NavLink = (props: NavLinkProps) => {
  const { displayText, scramble, reset } = useScramble(props.text);
  const location = useLocation();
  const isActive = location.pathname === props.href;

  const className = `box-border caret-transparent block ${isActive ? 'text-blue-950 bg-white' : 'hover:text-blue-950 hover:bg-white'}`;
  const inner = (
    <span role="text" className="box-border caret-transparent">
      [{displayText}]
    </span>
  );

  if (props.external) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onMouseEnter={scramble}
        onMouseLeave={reset}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      to={props.href}
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      {inner}
    </Link>
  );
};
