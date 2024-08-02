import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMG_MCt5w_8SzjxGXVv-wslGj4vzaAgOl1cg&s"
                            alt="Profile"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
                            Front-End Developer with Expertise in Modern Technologies
                        </h2>
                        <p className="mt-4 text-gray-600">
                            I'm a front-end developer specializing in HTML, CSS, JavaScript, and modern frameworks and tools like React, Bootstrap, Tailwind, Next.js, and Vite. 
                        </p>
                        <p className="mt-4 text-gray-600">
                            I excel in creating responsive and dynamic user interfaces, utilizing state management with Redux and integrating APIs to enhance functionality.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Constantly learning and adapting, I aim to deliver high-quality, efficient code and innovative solutions for your web projects.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Ready to collaborate and bring your vision to life with my skills and experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
