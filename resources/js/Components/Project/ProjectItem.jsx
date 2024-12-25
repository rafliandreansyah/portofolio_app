import { Link } from "@inertiajs/react";

export default function ProjectItem({ project }) {
    // const appUrl = process.env.APP_URL;
    // console.log(appUrl);
    return (
        <Link href={project.portfolio_link} className="group">
            <div className="flex flex-col gap-3 items-center md:items-start">
                <div className="rounded-lg max-w-96 aspect-[3/4] overflow-hidden group-hover:shadow-lg transition">
                    <img
                        src={project.image}
                        className="size-full max object-cover"
                    />
                </div>
                <p className="text-orange">{project.project_stack}</p>
                <h5 className="font-bold text-2xl">{project.project_name}</h5>
                <div className="flex gap-5">
                    {project.tools.map((tool) => (
                        <img
                            key={tool.id}
                            src={`${tool.tool_icon}`}
                            className="size-6 object-contain"
                        />
                    ))}
                </div>
            </div>
        </Link>
    );
}
