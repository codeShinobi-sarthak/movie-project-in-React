// Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-center items-center flex-col">
                <p className="text-sm mb-2">© {new Date().getFullYear()} Sarthak Jain. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/sarthak-jain-65b1a1226/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/codeShinobi-sarthak/codeShinobi-sarthak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-500 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
