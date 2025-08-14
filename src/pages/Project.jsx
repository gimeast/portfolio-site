import React, { useEffect, useState } from "react";

const dataList = [
    {
        id: 1,
        name: "계곡 정보",
        img: "/images/valley-info.png",
        alt: "계곡 정보 사이트 이미지",
        url: "https://valley-info.com/",
        types: ["WEB"],
        date: "2025-08",
    },
    {
        id: 2,
        name: "멜론 랜딩페이지",
        img: "/images/melon.png",
        alt: "멜론 랜딩페이지 이미지",
        url: "https://melon-wave.github.io/melon-wave/",
        types: ["WEB", "INTERACTIVE"],
        date: "2025-06",
    },
];

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [currentType, setCurrentType] = useState({});

    const filterTypes = ["ALL", "DATA-VISUALIZATION", "WEB", "INTERACTIVE"];

    function handleFilter(type) {
        setCurrentType(type);

        if (type === "ALL") {
            setProjects(dataList);
        } else {
            setProjects(
                dataList.filter((project) => project.types.includes(type))
            );
        }
    }

    useEffect(() => {
        handleFilter("ALL");
    }, []);

    return (
        <>
            <h2 className="text-7xl font-bold">Projects</h2>
            <section className="mb-50">
                <h3 className="sr-only">프로젝트 목록</h3>
                <ul className="flex gap-5">
                    {filterTypes.map((type, index) => (
                        <li className="mt-15" key={index}>
                            <button
                                className={`border border-gray-300 text-lg px-6 py-0.5 rounded-2xl cursor-pointer ${currentType === type ? "bg-zinc-900 text-white" : ""}`}
                                onClick={() => handleFilter(type)}
                            >
                                {type}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-30 mt-30">
                    {projects.map((project, index) => (
                        <li
                            key={project.id}
                            className={`relative ${index % 2 === 0 ? "left-0" : "left-40"}`}
                        >
                            <a href={project.url} target="_blank">
                                <img
                                    className="max-w-150 shadow-2xl rounded-2xl"
                                    src={project.img}
                                    alt={project.alt}
                                />
                            </a>
                            <div className="absolute bottom-[-50px] left-5 flex flex-col justify-center pl-5 w-70 bg-[rgba(0,0,0,0.8)] text-white p-2">
                                <h4 className="text-xl font-bold">
                                    {project.name}
                                </h4>
                                <p className="flex gap-4 font-thin">
                                    {project.types.map((type, index) => (
                                        <span key={index}>#{type}</span>
                                    ))}
                                </p>
                                <span className="text-sm font-thin text-gray-400">
                                    {project.date}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Project;
