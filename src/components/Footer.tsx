import FooterSection from "./FooterSection";
import { footerItems } from "../data/DATA";
function Footer() {
    return (
        <>
            <footer className="bg-gradient-to-b from-[#66BEF3]  to-[#5B99F3] items-center text-center md:text-start">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
                        <div className="flex flex-col w-2/3 text-center md:text-left items-center md:items-start gap-4 mb-6 md:mb-0 md:w-1/3">
                            <a href="#" className="flex items-center">
                                <img
                                    src="/logo-white.svg"
                                    className="h-8 me-3"
                                    alt="Logo"
                                />
                            </a>
                            <p className="text-white">
                                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                            </p>
                            <p className="text-white">
                                ©Trafalgar PTY LTD 2020. All rights reserved
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <FooterSection items={footerItems} />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;
