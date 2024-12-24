import { Link } from "@inertiajs/react";

export default function NavigationItem({ title, href, onClick, className }) {
    return (
        <li>
            <Link
                onClick={onClick}
                href={href}
                className={`hover:text-primary ${className} transition`}
            >
                {title}
            </Link>
        </li>
    );
}
