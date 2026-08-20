import { ReactNode } from "react";

type LinksList = {
    title: string;
    href: string;
}[];

type CtaType = {
    text: ReactNode;
    href: string;
};
export default function CustomCard({ title, links, description, CTA, icon }: { title: string, description: string, links: LinksList, CTA: CtaType, icon: React.ReactNode }) {
    return (
        <div className="p-4 rounded-md border border-yellow-400 dark:border-yellow-100 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2">
                    {icon}
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 my-2">{description}</p>
                <ul className="px-2">
                    {links.map((link, index) => (
                        <li key={index} className="text-blue-900 hover:text-blue-700 dark:text-blue-500 hover:dark:text-blue-300 hover:underline list-disc list-inside">
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* hide this until we have journey pages */}
            <a href={CTA.href} className="bg-blue-900 dark:bg-blue-700 text-white px-4 py-2 rounded-md mt-5 flex gap-2 w-full justify-center hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-105 transition-all duration-300 ">{CTA.text}</a>
        </div>
    );
}