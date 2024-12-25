import { Link } from "@inertiajs/react";
import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/NavigationItem";
import { useState } from "react";

export default function Header({ title }) {
    const [nav, setNav] = useState(false);

    function handleShowNavigation() {
        setNav((prevState) => {
            return !prevState;
        });
    }
    return (
        <header className="flex items-center justify-between py-5 px-4 md:px-0">
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
            <Navigation nav={nav} handleShowNavigation={handleShowNavigation}>
                <NavigationItem
                    title="About"
                    href="/"
                    onClick={handleShowNavigation}
                    active={title === "home" ? true : false}
                />
                <NavigationItem
                    title="Project"
                    href="/project"
                    onClick={handleShowNavigation}
                    active={title === "project" ? true : false}
                />
                <NavigationItem
                    title="Contact"
                    href="/contact"
                    onClick={handleShowNavigation}
                    active={title === "contact" ? true : false}
                />
            </Navigation>
        </header>
    );
}
