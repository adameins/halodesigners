interface FooterItem {
    title: string;
    content: { name: string; href: string }[];
}

interface FooterSectionProps {
    items: FooterItem[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ items }) => {
    return (
        <>
            {items.map((section, index) => (
                <div key={index}>
                    <h2 className="mb-6 text-sm font-bold text-white uppercase">
                        {section.title}
                    </h2>
                    <ul className="text-white font-light">
                        {section.content.map((link, idx) => (
                            <li key={idx} className="mb-4">
                                <a href={link.href} className="hover:underline">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default FooterSection;
