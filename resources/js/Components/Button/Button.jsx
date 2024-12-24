export default function Button({ title, onClick, className }) {
    return (
        <button
            className={`${className} text-white py-4 px-10 rounded-md w-fit text-sm transition hover:bg-primary bg-black`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
