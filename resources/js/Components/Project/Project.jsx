import ProjectItem from "./ProjectItem";

export default function Project({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
}
