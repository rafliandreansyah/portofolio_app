import NavigationItem from "../Navigation/NavigationItem";

export default function Footer({ socialMediaLink }) {
    function handleClickSocialMediaLink(url) {
        if (!url) {
            return;
        }
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <footer className="py-10 mt-32 w-full bg-light-grey left-0 right-0 flex flex-col items-center gap-8 bottom-0">
            <img src="/images/logo.png" className="size-20" />
            <ul className="flex gap-5 items-center justify-center">
                <NavigationItem title="About" href="/" />
                <NavigationItem title="Work" href="/project" />
                <NavigationItem title="Contact" href="/contact" />
            </ul>
            <div className=" flex gap-8 items-start justify-center">
                {socialMediaLink.facebook && (
                    <button
                        onClick={() =>
                            handleClickSocialMediaLink(socialMediaLink.facebook)
                        }
                    >
                        <img src="/images/facebook.png" className="size-5" />
                    </button>
                )}
                {socialMediaLink.instagram && (
                    <button
                        onClick={() =>
                            handleClickSocialMediaLink(
                                socialMediaLink.instagram
                            )
                        }
                    >
                        <img src="/images/instagram.png" className="size-5" />
                    </button>
                )}
                {socialMediaLink.linkedIn && (
                    <button
                        onClick={() =>
                            handleClickSocialMediaLink(socialMediaLink.linkedIn)
                        }
                    >
                        <img src="/images/linkedin.png" className="size-5" />
                    </button>
                )}
            </div>
            <p>
                © 2024{" "}
                <span className="font-semibold text-primary">Muratech</span> All
                Rights Reserved , Inc.
            </p>
        </footer>
    );
}
