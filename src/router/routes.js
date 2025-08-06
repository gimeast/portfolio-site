import Home from "../components/Home.jsx";
import Project from "../components/Project.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import WebProject from "../components/WebProject.jsx";
import MobileProject from "../components/MobileProject.jsx";

const navRoutes = [
    { path: "/", label: "홈", component: Home },
    {
        path: "/project",
        label: "프로젝트",
        component: Project,
        children: [
            {
                path: "/project/web",
                label: "웹 프로젝트",
                component: WebProject,
            },
            {
                path: "/project/mobile",
                label: "모바일 앱",
                component: MobileProject,
            },
        ],
    },
    { path: "/about", label: "소개", component: About },
    { path: "/contact", label: "연락처", component: Contact },
];

export default navRoutes;
