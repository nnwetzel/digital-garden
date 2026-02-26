import { HeroTitle } from "@/sections/Hero/components/HeroTitle";
import { HeroSubtitle } from "@/sections/Hero/components/HeroSubtitle";
import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { SocialLinks } from "@/components/SocialLinks";

export const Hero = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col h-full w-full mt-10">
      <div className="w-full [clip-path:inset(0_100%_0_0)] animate-reveal-left" style={{ animationDelay: "200ms" }}>
        <HeroTitle />
      </div>
      <div className="w-full [clip-path:inset(0_100%_0_0)] animate-reveal-left" style={{ animationDelay: "400ms" }}>
        <HeroSubtitle />
      </div>
      <div className="w-full opacity-0 animate-slide-down" style={{ animationDelay: "600ms" }}>
        <HeroContent />
      </div>
      <div className="w-full [clip-path:inset(0_0_0_100%)] animate-reveal-right" style={{ animationDelay: "750ms" }}>
        <SocialLinks />
      </div>
    </div>
  );
};
