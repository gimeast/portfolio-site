import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import navRoutes from "./routes.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: navRoutes.map((route) => ({
            path: route.path,
            element: <route.component />,
        })),
    },
]);

export default router;
