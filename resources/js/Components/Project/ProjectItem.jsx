import { Link } from "@inertiajs/react";

export default function ProjectItem({ href }) {
    return (
        <Link href={href} className="group">
            <div className="flex flex-col gap-3 items-center md:items-start">
                <div className="rounded-lg max-w-96 aspect-[3/4] overflow-hidden hover:shadow-lg">
                    <img
                        src="/images/project.png"
                        className="size-full max object-cover"
                    />
                </div>
                <p className="text-orange">Front End</p>
                <h5 className="font-bold text-2xl">Landing Page Company</h5>
                <div className="flex gap-5">
                    <img
                        src="/images/js.png"
                        className="size-6 object-contain"
                    />
                    <img
                        src="/images/react.png"
                        className="size-6 object-contain"
                    />
                    <img
                        src="/images/laravel.png"
                        className="size-6 object-contain"
                    />
                </div>
            </div>
        </Link>
    );
}
