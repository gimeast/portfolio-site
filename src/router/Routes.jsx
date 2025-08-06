import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import navRoutes from "./routes.js";

const createRoutes = (routes) => {
    return routes.map((route) => ({
        path: route.path,
        element: <route.component />,
        ...(route.children && { children: createRoutes(route.children) })
    }));
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: createRoutes(navRoutes),
    },
]);

export default router;
