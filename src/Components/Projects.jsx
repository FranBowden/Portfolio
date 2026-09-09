import { BiLinkExternal, BiGroup } from "react-icons/bi";
import projectData from "../Data/projectData.json";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

const MAX_PROJECTS = 6;

const Projects = () => {
  const projects = projectData.slice(0, MAX_PROJECTS);

  return (
    <div className="pb-[60px]" id="projects">
      <div className="mx-auto max-w-6xl p-4 sm:p-10 text-primary flex flex-col gap-10 sm:gap-16 items-center justify-center ">
        <Reveal y={20} className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-display cursor-default text-4xl sm:text-5xl font-semibold text-primary">
            Recent Projects
          </h2>
          <p className="text-muted max-w-lg">
            A selection of games and apps I've built, from university
            coursework to personal and freelance projects.
          </p>
        </Reveal>

        <Stagger
          delay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <Card
                as="a"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface/[0.05]"
              >
                <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-subtle/10 bg-surface/[0.02]">
                  <span className="font-mono text-xs text-muted truncate">
                    {project.title.replace(/\s+/g, "")}.jsx
                  </span>
                  {project.team && (
                    <span
                      className="flex items-center gap-1 shrink-0 text-xs font-mono text-muted"
                      title="Built as part of a team"
                    >
                      <BiGroup className="text-sm" aria-hidden="true" />
                      Team project
                    </span>
                  )}
                </div>

                <div className="relative overflow-hidden bg-imagebg aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={`Screenshot of the ${project.title} project`}
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                  <BiLinkExternal className="absolute top-3 right-3 text-lg text-white/0 group-hover:text-white/80 transition-all duration-300" />
                </div>

                <div className="flex flex-col gap-3 p-5 flex-grow">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent-text transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mt-auto pt-2">
                    {project.technologies.map((tech, index) => (
                      <Tag key={index} variant="tech">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
};

export default Projects;
