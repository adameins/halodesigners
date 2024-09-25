import Button from "./Button";

interface SectionHeadingProps {
    title: string;
    description: string;
}

function SectionHeading({ title, description }: SectionHeadingProps) {
    return (
        <section className="flex flex-col gap-5 lg:w-2/4 items-center text-center lg:items-start lg:text-start self-center">
            <h1 className="text-4xl font-extrabold">
                {title}
            </h1>
            <img src="/devider.svg" className="max-w-20" />
            <p className="max-w-96">
                {description}
            </p>
            <Button text="Learn More" isReverse={true} />
        </section>
    )
}

export default SectionHeading;