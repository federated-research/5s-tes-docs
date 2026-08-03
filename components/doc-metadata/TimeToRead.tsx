import { LucideClock } from "lucide-react";
import { FrontMatter } from "nextra";
import { useEffect, useState } from "react";

// conditionally polyfill Temporal for Safari :(
const loadTemporal = async () => {
    if (typeof Temporal === "undefined") {
        const polyfill = await import("temporal-polyfill");
        globalThis.Temporal = polyfill.Temporal;
    }
};

await loadTemporal();

export function TimeToRead({ metadata }: { metadata?: FrontMatter }) {
    const [text, setText] = useState<string | null>(null);

    useEffect(() => {
        loadTemporal().then(() => {
            if (metadata?.readingTime == null) return;
            setText(Temporal.Duration.from(metadata.readingTime).toLocaleString());
        });
    }, [metadata]);

    if (!text) return null; // or a static fallback

    return (<dl className="flex w-full p-2 gap-2 items-center">
        <dt className="">
            <div className="flex gap-2 font-semibold">
                <LucideClock /> Time to read
            </div>
        </dt>
        <dd>
            {text}
        </dd>
    </dl>)
}