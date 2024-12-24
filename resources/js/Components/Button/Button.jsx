export default function Button({ title, onClick, className }) {
    return (
        <button
            className={`${
                className ? className : "hover:bg-black bg-primary"
            } text-white py-4 px-10 rounded-md w-fit text-sm transition`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
