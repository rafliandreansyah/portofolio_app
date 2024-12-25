import Header from "@/Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { usePage } from "@inertiajs/react";

export default function MainLayout({ children }) {
    const { title, socialMedia } = usePage().props;
    const socialMediaLink = {
        ...socialMedia,
    };
    return (
        <>
            <div className="min-h-screen flex flex-col justify-between">
                <div className="container mx-auto">
                    <Header title={title} />
                    <div id="content">{children}</div>
                </div>
                <Footer socialMediaLink={socialMediaLink} />
            </div>
        </>
    );
}
