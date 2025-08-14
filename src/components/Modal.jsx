import { NavLink } from "react-router-dom";
import { useState } from "react";

const Modal = ({ isOpen, handleMenuToggle }) => {
    const [linkList, setLinkList] = useState(["project", "about", "contact"]);

    return (
        <nav
            className={`fixed inset-0 bg-[rgba(0,0,0,0.9)] flex justify-center items-center 
                    transition-all duration-500 ${
                        isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none sr-only"
                    }`}
        >
            <ul className="flex flex-col gap-10 text-5xl text-white text-center italic">
                {linkList.map((link) => (
                    <li key={link}>
                        <NavLink
                            to={`/${link}`}
                            onClick={handleMenuToggle}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-700 font-bold shadow-[0_5px_0_0_white]"
                                    : "transition-all duration-300 ease-in-out hover:shadow-[0_5px_0_0_white]"
                            }
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Modal;
