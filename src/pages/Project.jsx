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

    const filterTypes = ["ALL", "WEB", "INTERACTIVE"];

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

            <section className="flex flex-col items-center mt-20">
                <h3 className="sr-only">프로젝트 목록</h3>

                <ul className="flex justify-center items-center bg-gray-100 rounded-2xl w-full max-w-sm px-4 h-14">
                    {filterTypes.map((type, index) => (
                        <li className="" key={index}>
                            <button
                                className={`text-lg px-4 py-2 rounded-2xl cursor-pointer ${currentType === type ? "bg-white text-black" : ""}`}
                                onClick={() => handleFilter(type)}
                            >
                                {type}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 mt-20">
                    {projects.map((project) => (
                        <li className="relative mt-10" key={project.id}>
                            <a href={project.url} target="_blank">
                                <img
                                    className="w-full max-w-150 mx-auto shadow-2xl rounded-2xl"
                                    src={project.img}
                                    alt={project.alt}
                                />
                            </a>

                            <h4 className="text-2xl mt-5">{project.name}</h4>
                            <time className="text-sm text-gray-600">
                                {project.date}
                            </time>

                            <div className="flex gap-1">
                                {project.types.map((type) => (
                                    <span
                                        key={type}
                                        className="bg-gray-800 text-white px-2 py-1 rounded-2xl"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Project;
