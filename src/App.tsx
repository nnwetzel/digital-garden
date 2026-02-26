import { Routes, Route } from "react-router-dom";
import { Main } from "@/sections/Main";
import { ProjectsPage } from "@/pages/Projects";
import { ExperiencePage } from "@/pages/Experience";

export const App = () => {
  return (
    <body className="text-neutral-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-departure_mono">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </body>
  );
};
