import MainLayout from "@/Layout/MainLayout";
import SectionTitle from "@/Components/Section/SectionTitle";
import Section from "@/Components/Section/Section";
import Button from "@/Components/Button/Button";
import Project from "@/Components/Project/Project";
import Skill from "@/Components/Skill/Skill";
import { Link } from "@inertiajs/react";

function HomePage({ projects, skills, content }) {
    function handleNewPage(url) {
        if (!url) {
            return;
        }
        window.open(url, "_blank", "noreferrer");
    }
    return (
        <>
            {/* Heading Section */}
            <section className="py-10 mt-10 flex flex-col md:flex-row gap-10 md:gap-5 p-5 md:p-0 items-center justify-center">
                <div className="flex flex-col gap-16 flex-1 order-last md:order-first items-center md:items-start">
                    <div className="flex flex-col gap-4 text-center md:text-start justify-center md:justify-start">
                        <h3 className="font-semibold text-xl">
                            {content.job ? content.job : "Web Dev | Mobile Dev"}
                        </h3>
                        <h1 className="font-semibold text-6xl">
                            {content.jobPosition
                                ? content.jobPosition
                                : "Software Engineer"}
                        </h1>
                        <p className="text-base">
                            {content.jobDescription
                                ? content.jobDescription
                                : ""}
                        </p>
                    </div>

                    <Button
                        title="Contact"
                        onClick={() =>
                            handleNewPage(
                                content.contactUrl
                                    ? content.contactUrl
                                    : undefined
                            )
                        }
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={
                            content.userImage
                                ? content.userImage
                                : "/images/profile.png"
                        }
                        className="size-full max object-contain max-w-96"
                    />
                </div>
            </section>

            {/* Service Section */}
            <Section className="py-28 flex flex-col gap-20 items-center">
                <SectionTitle
                    title="Service"
                    description={
                        content.serviceDescription
                            ? content.serviceDescription
                            : ""
                    }
                />
                <Skill skills={skills} />
            </Section>

            {/* Last Project */}
            <Section className="py-28 flex flex-col gap-20 items-center">
                <SectionTitle
                    title="Latest Project"
                    description={
                        content.latestProjectDescription
                            ? content.latestProjectDescription
                            : ""
                    }
                />

                <Project projects={projects} />

                <Link href="/project">
                    <Button title="See All" />
                </Link>
            </Section>

            {/* Contact Section */}
            <section className="py-28 flex flex-col gap-16 items-center">
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
            </section>
        </>
    );
}

HomePage.layout = (page) => <MainLayout children={page} />;

export default HomePage;
