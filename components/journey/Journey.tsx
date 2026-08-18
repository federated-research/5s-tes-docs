import Link from "next/link";
import "./journey.css";

export interface JourneyStep {
    title: string;
    href: string;
}

export interface JourneyProps {
    steps: JourneyStep[];
    className?: string;
}

export function Journey({
    steps,
    className = "",
}: JourneyProps) {
    if (!steps.length) {
        return null;
    }

    return (
        <nav
            className={`journey ${className}`}
            aria-label="Journey"
        >
            <ol className="journey-list">
                {steps.map((step, index) => {
                    const isExternal = /^https?:\/\//.test(step.href);

                    return (
                        <li key={`${step.title}-${index}`} className="journey-step">
                            <Link
                                href={step.href}
                                className="journey-step-link"
                                {...(isExternal
                                    ? {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    }
                                    : {})}
                            >
                                <span className="journey-node" aria-hidden="true">
                                    {index + 1}
                                </span>

                                <span className="journey-title">
                                    {step.title}
                                </span>


                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Journey;