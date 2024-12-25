import SkillItem from "./SkillItem";

export default function Skill({ skills }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 px-2">
            {skills.map((skill) => (
                <SkillItem key={skill.id} skill={skill} />
            ))}
        </div>
    );
}
