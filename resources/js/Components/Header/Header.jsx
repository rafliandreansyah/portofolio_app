import { Link } from "@inertiajs/react";
import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/NavigationItem";
import { useState } from "react";

export default function Header() {
    const [nav, setNav] = useState(false);

    function handleShowNavigation() {
        setNav((prevState) => {
            return !prevState;
        });
    }
    return (
        <header className="flex items-center justify-between py-4 px-4 md:px-0">
            <Link href="/">
                <div className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="size-10"
                    />
                    <span className="text-base font-semibold ms-2 text-primary">
                        Muratech
                    </span>
                </div>
            </Link>
            <Navigation nav={nav}>
                <NavigationItem title="About" href="/" />
                <NavigationItem title="Project" href="/project" />
                <NavigationItem title="Contact" href="/contact" />
            </Navigation>
        </header>
    );
}
