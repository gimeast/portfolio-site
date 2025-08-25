import { NavLink } from "react-router-dom";
import { useState } from "react";

const Modal = ({ isOpen, handleMenuToggle }) => {
    const [linkList, setLinkList] = useState([
        { url: "/project", name: "Project" },
        { url: "/about", name: "About" },
        { url: "/contact", name: "Contact" },
    ]);

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
                {linkList.map(({ name, url }) => (
                    <li key={name}>
                        <NavLink
                            to={`${url}`}
                            onClick={handleMenuToggle}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-700 font-bold shadow-[0_5px_0_0_white]"
                                    : "transition-all duration-300 ease-in-out hover:shadow-[0_5px_0_0_white]"
                            }
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Modal;
