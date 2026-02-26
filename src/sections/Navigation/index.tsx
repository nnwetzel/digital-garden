import { NavLink } from "@/sections/Navigation/components/NavLink";

export const Navigation = () => {
  return (
    <div className="box-border caret-transparent gap-x-1 flex flex-wrap w-full">
      <NavLink href="/" text="home" />
      <p className="box-border caret-transparent visible md:invisible">•</p>
      <NavLink href="/projects" text="projects" />
      <p className="box-border caret-transparent visible md:invisible">•</p>
      <NavLink href="/experience" text="experience" />
      <p className="box-border caret-transparent visible md:invisible">•</p>
      <NavLink href="/Nathaniel_Wetzel_Resume.pdf" text="resume" external />
    </div>
  );
};
