import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";

export const navRoutes = [
    { path: "/", label: "홈", component: Home },
    { path: "/project", label: "프로젝트", component: Project },
    { path: "/about", label: "소개", component: About },
    { path: "/contact", label: "연락처", component: Contact },
];
