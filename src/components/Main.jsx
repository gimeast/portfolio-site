import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <main className="mt-8 mx-auto max-w-7xl">
            <Outlet />
        </main>
    );
};

export default Main;
