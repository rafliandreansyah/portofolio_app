import { Link } from "@inertiajs/react";
import NavigationItem from "../Navigation/NavigationItem";

export default function Footer() {
    return (
        <footer className="py-10 mt-32 w-full bg-light-grey left-0 right-0 flex flex-col items-center gap-8">
            <img src="/images/logo.png" className="size-20" />
            <ul className="flex gap-5 items-center justify-center">
                <NavigationItem title="About" />
                <NavigationItem title="Work" />
                <NavigationItem title="Contact" />
            </ul>
            <div className=" flex gap-8 items-start justify-center">
                <Link>
                    <img src="/images/facebook.png" className="size-5" />
                </Link>
                <Link>
                    <img src="/images/instagram.png" className="size-5" />
                </Link>
                <Link>
                    <img src="/images/linkedin.png" className="size-5" />
                </Link>
            </div>
            <p>
                © 2024{" "}
                <span className="font-semibold text-primary">Muratech</span> All
                Rights Reserved , Inc.
            </p>
        </footer>
    );
}
