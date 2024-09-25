import { useState } from 'react';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navItems = [
        { name: 'Home', href: '#', current: true },
        { name: 'About Us', href: '#about-us' },
        { name: 'Find a Doctor', href: '#doctor-section' },
        { name: 'App', href: '#app-section' },
        { name: 'Testimonials', href: '#testimonial' },
    ];

    return (
        <nav className="border-gray-200 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="/logo.svg"
                        className="h-8"
                        alt="Logo"
                    />
                </a>

                <button
                    onClick={toggleNav}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isNavOpen}
                >
                    <img src='/hamburger.svg' />
                </button>

                <div className={`${isNavOpen ? 'absolute' : 'hidden'} w-full md:block md:w-auto top-full left-0 z-10`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-blue-500 md:bg-transparent">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`block py-2 px-3 rounded ${item.current
                                        ? 'text-white md:text-black text-center font-bold'
                                        : 'text-white md:text-black text-center font-normal opacity-50 md:hover:opacity-100'
                                        }`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
