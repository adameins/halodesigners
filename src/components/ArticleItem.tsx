

interface ArticleItemProps {
    img: string;
    title: string;
    description: string;
}

function ArticleItem({ img, title, description }: ArticleItemProps): JSX.Element {
    return (
        <div className="flex flex-col gap-7 bg-white shadow-2xl shadow-gray-300 max-w-sm rounded-xl transform transition-transform duration-300 hover:-translate-y-3">
            <img src={img} alt={title} className="w-fit items-start rounded-t-xl" />
            <div className="flex flex-col gap-5 p-5">
                <h1 className="font-bold text-xl">{title}</h1>
                <p>{description}</p>
                <div className="flex items-center gap-2">
                    <p className="text-[#458FF6]">Read More</p>
                    <svg width="20" height="15" viewBox="0 0 32 20" className="fill-[#458FF6]" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.73745 11.2373L24.7834 11.2373L20.1596 15.8611C19.5219 16.4988 19.5219 17.4555 20.1596 18.0932C20.7974 18.731 21.754 18.731 22.3918 18.0932L29.726 10.759C30.3637 10.1213 30.3637 9.16464 29.726 8.52689L22.3918 1.1927C21.754 0.55495 20.7974 0.55495 20.1596 1.1927C19.5219 1.83046 19.5219 2.78709 20.1596 3.42485L24.7834 8.04857L3.73745 8.04857C2.94025 8.04857 2.14306 8.68633 2.14306 9.64296C2.14306 10.5996 2.94025 11.2373 3.73745 11.2373Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ArticleItem;