import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="mt-8 mx-auto max-w-7xl">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
