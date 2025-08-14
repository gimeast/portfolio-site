import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <main className="flex flex-col items-center mx-auto max-w-[1920px] mt-48">
            <Outlet />
        </main>
    );
};

export default Main;
