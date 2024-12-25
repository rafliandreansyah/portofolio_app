import { Link } from "@inertiajs/react";

export default function NavigationItem({
    title,
    href,
    onClick,
    className,
    active,
}) {
    return (
        <li>
            <Link
                onClick={onClick}
                href={href}
                className={`hover:text-primary ${className} transition ${
                    active ? "text-primary" : ""
                }`}
            >
                {title}
            </Link>
        </li>
    );
}
