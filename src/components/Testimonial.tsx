import React, { useState, useEffect } from "react";
import { testimonials } from "../data/DATA";


const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const nextSlide = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);


    return (
        <div className="max-w-4xl py-10 md:py-20 overflow-hidden relative md:mx-16 lg:mx-auto mx-3" id="testimonial" data-aos-duration="1000" data-aos="fade-up">
            <h2 className="text-3xl text-center mb-5 font-bold">
                What our customer are saying
            </h2>
            <div
                className={`flex transition-transform duration-500 ease-in-out transform ${direction === "right"
                    ? "translate-x-0"
                    : "-translate-x-full"
                    }`}
                style={{
                    transform: `translateX(${-currentIndex * 100}%)`,
                }}
                data-aos="fade-up"
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="min-w-full bg-gradient-to-br from-[#66BEF3]  to-[#5B99F3] rounded-lg shadow-md p-8 text-white"
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold">{testimonial.name}</h3>
                                <p className="text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="mt-4">{testimonial.quote}</p>
                    </div>
                ))}
            </div>

            <div className="flex gap-9 items-center self-center w-fit mx-auto mt-6">
                <button
                    onClick={prevSlide}
                >
                    <svg width="25" height="19" viewBox="0 0 29 19" className="fill-[#B5D2FB] hover:fill-[#458FF6]" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.6911 7.76265L5.64523 7.76265L10.269 3.13893C10.9067 2.50117 10.9067 1.54454 10.269 0.906783C9.6312 0.269028 8.67457 0.269028 8.03681 0.906783L0.702627 8.24097C0.0648714 8.87872 0.0648714 9.83536 0.702627 10.4731L8.03681 17.8073C8.67457 18.445 9.6312 18.445 10.269 17.8073C10.9067 17.1695 10.9067 16.2129 10.269 15.5752L5.64523 10.9514L26.6911 10.9514C27.4883 10.9514 28.2855 10.3137 28.2855 9.35704C28.2855 8.40041 27.4883 7.76265 26.6911 7.76265Z" />
                    </svg>
                </button>

                <div className="flex space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                >
                    <svg width="28" height="20" viewBox="0 0 32 20" className="fill-[#B5D2FB] hover:fill-[#458FF6]" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.73745 11.2373L24.7834 11.2373L20.1596 15.8611C19.5219 16.4988 19.5219 17.4555 20.1596 18.0932C20.7974 18.731 21.754 18.731 22.3918 18.0932L29.726 10.759C30.3637 10.1213 30.3637 9.16464 29.726 8.52689L22.3918 1.1927C21.754 0.55495 20.7974 0.55495 20.1596 1.1927C19.5219 1.83046 19.5219 2.78709 20.1596 3.42485L24.7834 8.04857L3.73745 8.04857C2.94025 8.04857 2.14306 8.68633 2.14306 9.64296C2.14306 10.5996 2.94025 11.2373 3.73745 11.2373Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
