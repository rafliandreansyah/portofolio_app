export default function SkillItem({ skill }) {
    return (
        <div className="flex flex-col gap-5 items-center text-center">
            <img src={skill.icon} className="object-contain max-h-24" />
            <h5 className="text-3xl font-semibold">{skill.skill_name}</h5>
            <p>{skill.description}</p>
        </div>
    );
}
