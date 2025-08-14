import { Link } from "react-router-dom";
import MenuToggle from "./MenuToggle.jsx";

export default function Header() {
    return (
        <header className="flex justify-center items-center w-dvw fixed top-0">
            <div className="w-[100%] flex justify-between p-5 max-w-[1920px]">
                <h1 className="text-3xl">
                    <Link to="/">GIMEAST</Link>
                </h1>
                <MenuToggle />
            </div>
        </header>
    );
}
