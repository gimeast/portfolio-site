import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-end border-t-1 min-h-34 px-4 py-6">
            <address className="pb-4 sm:pb-10 sm:pl-20 not-italic text-center sm:text-left">
                <a className="block" href="mailto:dudu.gimeast@gmail.com">
                    dudu.gimeast@gmail.com
                </a>
                <a className="block mt-1" href="https://github.com/gimeast">
                    https://github.com/gimeast
                </a>
            </address>
            <small className="pb-4 sm:pb-10 sm:pr-20 text-gray-500 text-base sm:text-lg text-center sm:text-right">
                &copy; 2025 GIMEAST. All Rights Reserved.
            </small>
        </footer>
    );
};

export default Footer;
