import Section from "@/Components/Section/Section";
import MainLayout from "@/Layout/MainLayout";
import SectionTitle from "@/Components/Section/SectionTitle";
import Button from "@/Components/Button/Button";
import Project from "../../Components/Project/Project";

function ProjectPage({ projects, content }) {
    function handleNewPage(url) {
        if (!url) {
            return;
        }
        window.open(url, "_blank", "noreferrer");
    }
    return (
        <>
            {/* List Projects */}
            <div className="py-10 flex flex-col gap-20 items-center px-5">
                <SectionTitle
                    title="All Project"
                    description={
                        content.allProjectDescription
                            ? content.allProjectDescription
                            : ""
                    }
                />
                <Project projects={projects} />
            </div>

            {/* Contact Me */}
            <Section>
                <SectionTitle
                    title="Lets Code Together"
                    description={
                        content.contactDescription
                            ? content.contactDescription
                            : ""
                    }
                />

                <Button
                    title="Contact Me"
                    onClick={() =>
                        handleNewPage(
                            content.contactUrl ? content.contactUrl : undefined
                        )
                    }
                />
            </Section>
        </>
    );
}

ProjectPage.layout = (page) => <MainLayout children={page} />;

export default ProjectPage;
