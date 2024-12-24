import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/NavigationItem";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-4 px-4 md:px-0">
            <div className="flex items-center">
                <img src="/images/logo.png" alt="Logo" className="size-10" />
                <span className="text-base font-semibold ms-2 text-primary">
                    Muratech
                </span>
            </div>
            <Navigation>
                <NavigationItem title="About" href="/" />
                <NavigationItem title="Work" href="/work" />
                <NavigationItem title="Contact" href="/contact" />
            </Navigation>
        </header>
    );
}
