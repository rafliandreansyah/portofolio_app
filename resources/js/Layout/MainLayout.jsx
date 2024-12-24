import Header from "@/Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function MainLayout({ children }) {
    return (
        <>
            <div className="container mx-auto">
                <Header />
                <div id="content">{children}</div>
            </div>
            <Footer />
        </>
    );
}
