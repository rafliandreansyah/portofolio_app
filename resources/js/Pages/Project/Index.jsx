import Section from "@/Components/Section/Section";
import MainLayout from "@/Layout/MainLayout";
import SectionTitle from "@/Components/Section/SectionTitle";
import ProjectItem from "@/Components/Project/ProjectItem";
import Button from "@/Components/Button/Button";

function ProjectPage() {
    return (
        <>
            {/* List Projects */}
            <div className="py-10 flex flex-col gap-20 items-center">
                <SectionTitle
                    title="All Project"
                    description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>

            {/* Contact Me */}
            <Section>
                <SectionTitle
                    title="Lets Code Together"
                    description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
                />

                <Button title="Contact Me" />
            </Section>
        </>
    );
}

ProjectPage.layout = (page) => <MainLayout children={page} />;

export default ProjectPage;
