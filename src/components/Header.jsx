import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Modal from "./Modal.jsx";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="flex justify-center items-center w-dvw fixed top-0 z-10">
            <Modal isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
            <div className="w-[100%] flex justify-between p-5 max-w-[1920px]">
                <h1 className="text-3xl">
                    <Link to="/">
                        <span className="inline-block animate-[bounce_0.7s_ease-in_3_forwards]">
                            G
                        </span>
                        IMEAST
                    </Link>
                </h1>

                {!isOpen ? (
                    <button
                        className="cursor-pointer"
                        onClick={handleMenuToggle}
                    >
                        <FiMenu className="size-10" />
                    </button>
                ) : (
                    <button className="cursor-pointer">
                        <FiX
                            className="size-10 relative text-white transition-all ease-in rotate-0 hover:rotate-90"
                            onClick={handleMenuToggle}
                        />
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
