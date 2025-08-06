import React from "react";
import { Link, Outlet } from "react-router-dom";

const Project = () => {
    return (
        <>
            <h2>프로젝트</h2>
            <section>
                <h3>project...</h3>
                <Link to="/project/web">WEB</Link>
                <Link to="/project/mobile">MOB</Link>
                <Outlet />
            </section>
        </>
    );
};

export default Project;
