import { navRoutes } from "../router/routes.js";
import { Route, Routes } from "react-router-dom";

function Main() {
    return (
        <main className="mt-8 mx-auto max-w-7xl">
            <Routes>
                {navRoutes.map(({ path, component }) => {
                    const Component = component;
                    return (
                        <Route key={path} path={path} element={<Component />} />
                    );
                })}
            </Routes>
        </main>
    );
}

export default Main;
