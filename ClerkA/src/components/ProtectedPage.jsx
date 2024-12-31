import React from 'react';

const Portfolio = () => {
    return (
        <div className="font-sans bg-gray-200 text-gray-800 min-h-screen max-w-24 py-10">
            <header className="bg-green-500 text-white py-6 text-center shadow-lg">
                <h1 className="text-3xl font-bold">Shrey Vardhan Dhiman</h1>
                <p className="mt-2">Seohara, Uttar Pradesh | <a href="mailto:shreyvardhan390@gmail.com" className="underline">shreyvardhan390@gmail.com</a> | +91 9084257169</p>
            </header>

            <main className="max-w-4xl mx-auto py-8 px-4">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-500 mb-4">Education</h2>
                    <ul className="list-none space-y-4">
                        <li><strong>SRM Institute of Science & Technology</strong> - B.Tech in Computer Science Engineering (8.75 CGPA), Chennai, May 2024</li>
                        <li><strong>Parker Public School Budhanpur</strong> - XII, CBSE Board, Budhanpur, Uttar Pradesh, April 2019</li>
                        <li><strong>Priyanka Modern School</strong> - X, CBSE Board, Dhampur, Uttar Pradesh, April 2017</li>
                    </ul>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-500 mb-4">Projects</h2>
                    <ul className="list-none space-y-4">
                        <li>
                            <h3 className="text-lg font-medium text-green-600">ImageGen (MERN Stack)</h3>
                            <p>Developed a dynamic web application for AI-powered image generation using MongoDB, React, Node.js, and Express.js. Secured with JWT and integrated with ClipDrop API.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium text-green-600">Cloud-Native Monitoring Application (DevOps)</h3>
                            <p>Created a real-time observability platform for Kubernetes-deployed apps, collecting metrics, logs, and traces to enhance performance management.</p>
                        </li>
                    </ul>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-500 mb-4">Certifications</h2>
                    <ul className="list-none space-y-4">
                        <li>Coding Ninjas: Certification of Excellence in C++ and Data Structures</li>
                        <li>AWS Academy Graduate: AWS Academy Cloud Operations</li>
                    </ul>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-500 mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">C++</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Python</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Data Structures and Algorithms</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">MongoDB</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Express</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">React</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Node.js</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">AWS</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">DBMS</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">DevOps</span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">NoSQL</span>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-500 mb-4">Achievements</h2>
                    <p>Hacktoberfest 2022: Successfully merged 4+ pull requests, showcasing significant contributions to open-source projects.</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-green-500 mb-4">Languages</h2>
                    <p>English, Hindi</p>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 text-center shadow-lg">
                <p>Connect with me: <a href="mailto:shreyvardhan390@gmail.com" className="text-green-400 underline">shreyvardhan390@gmail.com</a></p>
            </footer>
        </div>
    );
};

export default Portfolio;
