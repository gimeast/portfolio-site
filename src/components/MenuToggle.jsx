import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const MenuToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuToggle() {
        setIsOpen(!isOpen);
    }

    function handleMenuClose() {
        setIsOpen(false);
    }

    return (
        <>
            {!isOpen ? (
                <button className="cursor-pointer" onClick={handleMenuToggle}>
                    <FiMenu className="size-10" />
                </button>
            ) : (
                <button className="cursor-pointer">
                    <FiX
                        className="size-10 relative z-10 text-white transition-all ease-in rotate-0 hover:rotate-90"
                        onClick={handleMenuToggle}
                    />
                </button>
            )}
            {isOpen && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] flex justify-center items-center">
                    <nav>
                        <ul className="flex flex-col gap-10 text-5xl text-white text-center italic">
                            <li>
                                <NavLink
                                    to="/project"
                                    onClick={handleMenuClose}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-700 font-bold shadow-[0_5px_0_0_white]"
                                            : "transition-all duration-300 ease-in-out hover:shadow-[0_5px_0_0_white]"
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={handleMenuClose}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-700 font-bold shadow-[0_5px_0_0_white]"
                                            : "transition-all duration-300 ease-in-out hover:shadow-[0_5px_0_0_white]"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={handleMenuClose}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-700 font-bold shadow-[0_5px_0_0_white]"
                                            : "transition-all duration-300 ease-in-out hover:shadow-[0_5px_0_0_white]"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

export default MenuToggle;
