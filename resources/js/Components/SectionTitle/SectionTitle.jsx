export default function SectionTitle({ title, description }) {
    return (
        <div className="flex flex-col gap-4 items-center text-center px-5 md:px-20 lg:px-32 xl:px-40">
            <h2 className="text-5xl font-semibold">{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}
