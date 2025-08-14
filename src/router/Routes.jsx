import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import Project from "../pages/Project.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/project",
                element: <Project />,
            },
        ],
    },
]);

export default router;
