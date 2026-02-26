import { PageLayout } from "@/components/PageLayout";

interface Project {
  title: string;
  href?: string;
  tags: string[];
  description: React.ReactNode;
  image?: string;
}

const Tag = ({ label }: { label: string }) => (
  <span className="font-et_book text-sm text-slate-600 bg-slate-100 px-3 py-0.5 rounded-full whitespace-nowrap">
    {label}
  </span>
);

const ProjectEntry = ({ project }: { project: Project }) => (
  <div className="flex gap-5 mb-10">
    {/* Thumbnail */}
    <div className="flex-shrink-0 w-32 h-24 rounded overflow-hidden bg-slate-100">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-slate-200" />
      )}
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2 min-w-0">
      <h3 className="font-et_book text-base">
        {project.href ? (
          <a
            href={project.href}
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <p className="font-et_book text-base leading-7 text-slate-800">
        {project.description}
      </p>
    </div>
  </div>
);

const ndviCompare: Project = {
  title: "NDVI Compare",
  href: "https://github.com/nnwetzel/ndvi-compare",
  tags: ["FastAPI", "Google Earth Engine", "Docker", "Python"],
  description: (
    <>
      FastAPI backend for detecting vegetation change via NDVI (Normalized Difference Vegetation Index) using Google Earth Engine. Visualizes deforestation, wildfire recovery, urban expansion effects, and crop seasonality.
    </>
  ),
  image: "/ndvi_compare.png",
};

const faceRetrieval: Project = {
  title: "Fast Face Retrieval",
  href: "https://github.com/nnwetzel/fast-face-retrieval",
  tags: ["Deep Learning", "CNN", "Computer Vision", "Python"],
  description: (
    <>
      A face retrieval system that combines deep neural network feature extraction with vocabulary tree indexing for efficient and accurate image search across large-scale datasets like LFW and CelebA.
    </>
  ),
  image: "/fast_face_retrieval.jpg",
};

export const ProjectsPage = () => {
  return (
    <PageLayout>
      <div className="items-start box-border caret-transparent h-full w-full mt-10">
        <h2 className="text-2xl box-border caret-transparent leading-8 font-et_book mt-10 mb-4">
          Selected Work
        </h2>

        <ProjectEntry project={ndviCompare} />
        <ProjectEntry project={faceRetrieval} />
      </div>
    </PageLayout>
  );
};
