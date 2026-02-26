import { Link, useLocation } from 'react-router-dom';
import { Navigation } from '@/sections/Navigation';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isSubPage = location.pathname !== '/';

  return (
    <main className="text-xs items-center box-border caret-transparent flex flex-col h-full justify-start leading-[18px] min-h-screen w-full pt-12 sm:pt-16 pb-8 px-6 sm:px-8 md:pb-16 md:px-16">
      <div className="box-border caret-transparent h-full max-w-sm sm:max-w-md w-full md:max-w-2xl">
        {isSubPage ? (
          <div className="opacity-0 animate-slide-up w-full">
            <Link
              to="/"
              className="box-border caret-transparent block text-blue-950 hover:text-blue-950"
            >
              <span role="text" className="box-border caret-transparent">[back]</span>
            </Link>
            {children}
          </div>
        ) : (
          <div className="w-full [clip-path:inset(0_100%_0_0)] animate-reveal-left" style={{ animationDelay: "0ms" }}>
            <Navigation />
          </div>
        )}
        {!isSubPage && children}
      </div>
    </main>
  );
};
