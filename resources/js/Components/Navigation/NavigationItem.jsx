import { Link } from "@inertiajs/react";

export default function NavigationItem({ title, href, className }) {
    return (
        <li>
            <Link
                href={href}
                className={`hover:text-primary ${className} transition`}
            >
                {title}
            </Link>
        </li>
    );
}
