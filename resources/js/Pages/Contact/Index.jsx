import MainLayout from "@/Layout/MainLayout";
import Button from "@/components/Button/Button";

function ContactPage({ content }) {
    function handleNewPage(url) {
        if (!url) {
            return;
        }
        window.open(url, "_blank", "noreferrer");
    }
    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 p-5 items-center justify-center">
            <div className="rounded-xl">
                <img
                    src="/images/bg-contact.png"
                    className="size-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-5xl">Contact Me</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <img
                            src={
                                content.imageContact
                                    ? content.imageContact
                                    : "/images/gmail.svg"
                            }
                            alt=""
                            className="size-6"
                        />
                        <p>
                            {content.emailContact ? content.emailContact : ""}
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img
                            src="/images/phone.svg"
                            alt=""
                            className="size-6"
                        />
                        <p>
                            {content.phoneContact ? content.phoneContact : ""}
                        </p>
                    </div>
                </div>
                <Button
                    title="Whatsapp"
                    className="mt-10"
                    onClick={() =>
                        handleNewPage(
                            content.whatsappUrl
                                ? content.whatsappUrl
                                : undefined
                        )
                    }
                />
            </div>
        </div>
    );
}

ContactPage.layout = (page) => <MainLayout children={page} />;

export default ContactPage;
