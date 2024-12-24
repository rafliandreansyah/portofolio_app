import SkillItem from "@/Components/Skill/SkillItem";
import MainLayout from "../../Layout/MainLayout";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import ProjectItem from "@/Components/Project/ProjectItem";
import Button from "../../Components/Button/Button";

function HomePage() {
    return (
        <>
            {/* Heading Section */}
            <section className="py-10 flex flex-col md:flex-row gap-10 md:gap-5 p-5 md:p-0 items-center justify-center">
                <div className="flex flex-col gap-16 flex-1 order-last md:order-first items-center md:items-start">
                    <div className="flex flex-col gap-4 text-center md:text-start justify-center md:justify-start">
                        <h3 className="font-semibold text-xl">
                            Web Dev | Mobile Dev
                        </h3>
                        <h1 className="font-semibold text-6xl">
                            Software Engineer
                        </h1>
                        <p className="text-base">
                            This is a template Figma file, turned into code
                            using Anima. Learn more at AnimaApp.com
                        </p>
                    </div>

                    <Button
                        title="Contact"
                        className="bg-black hover:bg-primary"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src="/images/profile.png"
                        className="size-full max object-contain"
                    />
                </div>
            </section>

            {/* Service Section */}
            <section className="py-28 flex flex-col gap-20 items-center">
                <SectionTitle
                    title="Service"
                    description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 px-2">
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                </div>
            </section>

            {/* Last Project */}
            <section className="py-28 flex flex-col gap-20 items-center">
                <SectionTitle
                    title="Latest Project"
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

                <Button title="See All" className="bg-black hover:bg-primary" />
            </section>

            {/* Contact Section */}
            <section className="py-28 flex flex-col gap-16 items-center">
                <SectionTitle
                    title="Lets Code Together"
                    description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
                />

                <Button title="Contact Me" />
            </section>
        </>
    );
}

HomePage.layout = (page) => <MainLayout children={page} />;

export default HomePage;
