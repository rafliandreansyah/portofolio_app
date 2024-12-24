import MainLayout from "@/Layout/MainLayout";
import Button from "@/components/Button/Button";

function ContactPage() {
    return (
        <div className="flex flex-col md:flex-row gap-10 mt-10 p-5 items-center">
            <div className="rounded-xl">
                <img
                    src="/images/bg-contact.png"
                    className="size-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-5xl">Contact Me</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <img
                            src="/images/gmail.svg"
                            alt=""
                            className="size-6"
                        />
                        <p>rafliandreansyah957@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img
                            src="/images/phone.svg"
                            alt=""
                            className="size-6"
                        />
                        <p>(+62) 81232720821</p>
                    </div>
                </div>
                <Button title="Whatsapp" className="mt-10" />
            </div>
        </div>
    );
}

ContactPage.layout = (page) => <MainLayout children={page} />;

export default ContactPage;
