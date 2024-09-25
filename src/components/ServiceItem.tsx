

interface serviceItemProps {
    img: string;
    title: string;
    subtitle: string;
}

function ServiceItem({img, title, subtitle}: serviceItemProps): JSX.Element {
    return (
        <div className="flex flex-col gap-7 bg-white shadow-2xl shadow-gray-300 w-11/12 p-10 rounded-xl transform transition-transform duration-300 hover:-translate-y-3">
            <img src={img} alt={title} className="h-2/5 w-fit items-start" />
            <h1 className="font-bold text-xl">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}

export default ServiceItem;
