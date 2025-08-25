import React from "react";

const Footer = () => {
    return (
        <footer className="flex justify-between items-end border-t-1 h-34 mt-14">
            <address className="pb-10 pl-20 not-italic">
                <a className="block" href="mailto:dudu.gimeast@gmail.com">
                    dudu.gimeast@gmail.com
                </a>
                <a className="block mt-1" href="https://github.com/gimeast">
                    https://github.com/gimeast
                </a>
            </address>
            <small className="pb-10 pr-20  text-gray-500 text-lg">
                &copy; 2025 GIMEAST. All Rights Reserved.
            </small>
        </footer>
    );
};

export default Footer;
