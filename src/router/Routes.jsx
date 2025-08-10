import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home.jsx";
import Project from "../components/Project.jsx";
import WebProject from "../components/WebProject.jsx";
import MobileProject from "../components/MobileProject.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/project",
                element: <Project />,
                children: [
                    { path: "web", element: <WebProject /> },
                    { path: "mobile", element: <MobileProject /> },
                ],
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;
