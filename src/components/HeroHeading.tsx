import Button from "./Button";

function HeroHeading() {
    return (
        <section className="flex flex-col gap-5 h-full w-full lg:w-1/4 items-center text-center lg:items-start lg:text-start self-center">
            <h1 className="text-4xl font-extrabold">
                Virtual healthcare for you
            </h1>
            <p>
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <Button text="Consult Today" isReverse={false}/>
        </section>
    )
}

export default HeroHeading;
